let webpackConfig = require('./config/webpack.config.dev');
webpackConfig.entry = {};

module.exports = function(config) {
    config.set({

        files: [
            'build/static/js/main.js',
            'test/index.js',
        ],

        preprocessors: {
            'build/static/js/main.js': ['coverage'],
            'test/index.js': ['webpack'],
        },

        coverageReporter: {
            type : 'html',
            dir : 'coverage'
        },

        basePath: '',
        frameworks: ['jasmine'],
        exclude: [],
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS2'],
        singleRun: false,
        concurrency: Infinity,
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only'
        },
    })
};
