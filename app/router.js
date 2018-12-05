'use strict';
const HomeRouter = require('./routers/home');
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  HomeRouter(app);
};
