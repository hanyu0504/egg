'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1542809124010_8878';

  // add your config here
  config.middleware = [];
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/blog',
      options: {},
    },
  };
  return config;
};
