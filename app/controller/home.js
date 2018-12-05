'use strict';

const Controller = require('../core/base_controller');

class HomeController extends Controller {
  async findArticles() {
    const data = await this.service.home.findArticles();
    /* this.ctx.body = {
      code: 200,
      data,
      msg: 'success',
    }; */
    this.success(data);
  }
  async findArticle() {
    // console.log(object);
    // const query = this.ctx.query;
    // const query = this.ctx.request.query;
    const id = this.ctx.query.id;
    // console.log(id);
    // console.log(params);
    const data = await this.service.home.findArticle(id);
    /* this.ctx.body = {
      code: 200,
      data,
      msg: 'success',
    }; */
    this.success(data);
  }
  async createArticle() {
    this.success(this.ctx.request.body);
  }
}

module.exports = HomeController;
