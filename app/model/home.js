module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ArticleSchema = new Schema({
    title: {
      type: String,
      required: [ true, '标题不能缺少' ],
    },
    content: {
      type: String,
      required: [ true, '内容不能缺少' ],
    },
    tags: {
      type: String,
    },
    readCount: {
      type: Number,
      default: 0,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    author: {
      type: String,
      required: [ true, '作者不能缺少' ],
    },
  });
  return mongoose.model('Article', ArticleSchema);
};
