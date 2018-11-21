'use strict';
const userRouter = require('./routers/user');
const messageRouter = require('./routers/message');
const searchRouter = require('./routers/search');
const homeRouter = require('./routers/home');
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // User
  userRouter(app);
  // Message
  messageRouter(app);
  // Find
  searchRouter(app);
  // Home
  homeRouter(app);
};
