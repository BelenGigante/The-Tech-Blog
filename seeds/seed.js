const sequelize = require('../config/connection');
const { User, Post } = require('../models');
const userData = require('./user.json');
const postData = require('./post.json');


const init = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
    });
  }

  process.exit(0);
};

init();
