module.exports = app => {
  const { router, controller } = app;
  router.get('/articles', controller.home.findArticles);
  router.get('/article', controller.home.findArticle);
  router.post('/createArticle', controller.home.createArticle);
};
