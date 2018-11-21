module.exports = app => {
  const { router, controller } = app;
  router.get('/search/:keyword', controller.seache.find);
};
