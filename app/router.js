'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // User
  router.get('/users', contoller.user.findAll);
  router.get('/user/:id', controller.user.findOne);
  router.post('/user', controller.user.add);
  router.put('/user/:id', controller.user.update);
  router.del('/user/:id', controller.user.delete);

  // Message
  router.get('/messages/:userId', controller.message.findByUserId);
  router.post('/message', controller.message.add);
  router.del('/messages/:id', controller.message.delete);

  // Find
  router.get('/search/:keyword', controller.seache.find);

  // Home
  router.get('/hot', controller.home.findHot);
  router.get('heart', controller.home.findHeart);
};
