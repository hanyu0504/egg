const Service = require('egg').Service;
class HomeService extends Service {
  async findArticles() {
    const data = await this.ctx.model.Home.find({});
    return data;
  }
  async findArticle(_id) {
    const data = await this.ctx.model.Home.findOne({ _id });
    return data;
  }
}

module.exports = HomeService;
