/* eslint-disable no-console */
require('dotenv').config();

const path = require('path');
const env = require('./api/libs/env');

const config = {
  plugins: [
    {
      resolve: require.resolve('@arcblock/www'),
    },
    {
      resolve: require.resolve('@arcblock/gatsby-theme-www'),
      options: {
        disableI18n: false,
        pagesPath: [path.resolve('./src/markdown/'), path.resolve('./src/pages/')],
        siteMetaData: {
          title: env.appName,
          siteUrl: env.baseUrl,
        },
      },
    },
    {
      resolve: require.resolve('@arcblock/gatsby-i18n-redirect'),
      options: {
        languages: ['en', 'zh'],
        cookieName: 'nf_lang',
        pathPrefix: '/',
        pathSuffix: '/',
      },
    },
  ],
};

if (process.env.GATSBY_BASE_URL) {
  config.proxy = {
    prefix: '/api',
    url: process.env.GATSBY_BASE_URL,
    // url: 'http://localhost:3030',
  };
}

module.exports = config;
