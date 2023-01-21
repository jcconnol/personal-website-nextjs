module.exports = {
    siteUrl: 'https://johncc.me',
    generateRobotsTxt: true,
    additionalPaths: async (config) => [
      await config.transform(config, '/blog'),
    ],
    sitemapSize: 7000,
    exclude: ['/test', '/404', '/unity-test'],
    robotsTxtOptions: {
        policies: [
          {
            userAgent: '*',
            allow: '/*',
          },
        ],

    },
  }