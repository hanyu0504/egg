const Service = require('egg').Service;

class HomeService extends Service {
  async index() {
    return 'hi, egg';
  }
  async findHot() {
    const hotArticle = [];
    return hotArticle;
  }
  async findHeart() {
    const heartArtice = [];
  }
}

moudle.exports = HomeService;
