// Karma configuration
// Generated on Wed Dec 27 2017 17:37:40 GMT-0500 (EDT)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './node_modules/angular/angular.js',
      './node_modules/@uirouter/angularjs/release/angular-ui-router.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './app/users/users.module.js',
      './app/users/users.factory.js',
      './app/users/users.controller.js',
      './app/app.js',
      './app/users/users.factory.spec.js',
      './app/users/users.controller.spec.js'
    ],
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],
    port: 9876,
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
