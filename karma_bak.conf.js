const webpack = require('webpack');
const webpackConfig = require('./config/webpack.config.dev');
webpackConfig.entry = {};
module.exports = function (config) {

    const sourcePreprocessors = process.argv.some(argument => argument === '--debug') ? 'coverage' : [];
    const testPrepocessors = ['webpack'];
    config.set({

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'build/static/js/bundle.js',
            'test/*test.js',
            'test/**/*test.js',
            // 'src/**/*.js',
            // 'src/*.js',
            // 'src/**/*.html',
            // 'src/*.html',
            // 'node_modules/babel-polyfill/dist/polyfill.js',
            // 'node_modules/phantomjs-polyfill/bind-polyfill.js',
        ],

        preprocessors: {
            'build/static/js/bundle.js': ['webpack'],
            'test/*.js': ['babel'],
            'test/**/*.js': ['babel'],
            // 'src/*.js': sourcePreprocessors,
            // 'src/**/*.js': sourcePreprocessors,
            // 'src/**/*.html': ['ng-html2js']
        },

        // coverageReporter: {
        //     // specify a common output directory
        //     dir: 'coverage',
        //     reporters: [
        //         // reporters not supporting the `file` property
        //         {type: 'html', subdir: 'report-html'},
        //         {type: 'lcov', subdir: 'report-lcov'}
        //     ]
        // },

        basePath: '',
        frameworks: ['jasmine'],
        exclude: [],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        concurrency: Infinity,
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only'
        },
    })
};
