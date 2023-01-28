const User = require('./User');
const Post = require('./Post');
const Blog = require('./Blog');

// ASSOCIATIONS HERE
User.hasMany(Post,{
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});
User.hasOne(Blog,{
  foreignKey: 'user_id',
})
Post.belongTo(User,{
  foreignKey: 'user_id',
});
Blog.hasMany(Post,{
  foreignKey: 'post_id',
});
Blog.hasMany(User,{
  foreignKey: 'user_id',
});
Post.hasOne(Blog,{
  foreignKey: 'post_id',
});












module.exports = {
  User,
  Post,
};
