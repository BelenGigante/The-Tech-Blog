const User = require('./User');
const Post = require('./Post');
const Blog = require('./Blog');

// ASSOCIATIONS HERE
User.hasMany(Post,{
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});
Blog.hasMany(Post,{
  foreignKey: 'user_id',
});
Blog.hasMany(User,{
  foreignKey: 'user_id',
});
Post.belongsTo(User,{
  foreignKey: 'user_id',
});
Post.belongsTo(Blog,{
  foreignKey: 'user_id',
});


module.exports = {
  User,
  Post,
  Blog
};
