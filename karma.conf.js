// Karma configuration
// Generated on Mon Feb 06 2017 22:35:10 GMT+0300 (Беларусь (зима))

// const webpack = require("webpack");

module.exports = function (config) {

    const sourcePreprocessors = process.argv.some(argument => argument === '--debug') ? 'coverage' : [];
    const testPrepocessors = ['webpack'];
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'test/**/*test.js',
            'test/*test.js',
            // 'src/**/*.js',
            // 'src/**/*.html',
            // 'node_modules/babel-polyfill/dist/polyfill.js',
            // 'node_modules/phantomjs-polyfill/bind-polyfill.js',
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // 'test/*.js': testPrepocessors,
            // 'test/**/*.js': testPrepocessors,
            // 'src/*.js': sourcePreprocessors,
            // 'src/**/*.js': sourcePreprocessors,
            // 'src/**/*.html': ['ng-html2js']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        // reporters: ['progress', 'coverage'],
        reporters: ['progress'],

        // coverageReporter: {
        //     // specify a common output directory
        //     dir: 'coverage',
        //     reporters: [
        //         // reporters not supporting the `file` property
        //         {type: 'html', subdir: 'report-html'},
        //         {type: 'lcov', subdir: 'report-lcov'}
        //     ]
        // },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
};
