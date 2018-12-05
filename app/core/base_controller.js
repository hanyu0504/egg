'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  success(data) {
    this.ctx.body = {
      code: 200,
      msg: 'success',
      data,
    };
  }
  notFound(msg = 'not found') {
    this.ctx.throw(404, msg);
  }
}

module.exports = BaseController;
