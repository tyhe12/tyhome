module.exports = {
  transpileDependencies: ['vuetify'],
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~@/styles/main.scss";
          `
      }
    }
  },
  pluginOptions: {
    s3Deploy: {
      awsProfile: 'default',
      region: 'us-west-1',
      bucket: 'htymm.com',
      createBucket: true,
      staticHosting: true,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      gzip: true,
      uploadConcurrency: 5,
      pluginVersion: '4.0.0-rc3'
      // enableCloudfront: process.env.CLOUDFRONT_ENABLE === 'true',
      // cloudfrontId: process.env.CLOUDFRONT_ID,
      // cloudfrontMatchers: '/*'
    }
  }
}
