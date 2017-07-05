const webpackConfig = require('./webpack.config.js');
 
module.exports = function(config) {

    config.set({
        // browsers: ['Chrome'],
        browsers: ['PhantomJS','PhantomJS_custom'],
        //browsers: ['PhantomJS'],

        customLaunchers: {

            'PhantomJS_custom': {
                base: 'PhantomJS',
                options: {
                windowName: 'my-window',
                settings: {
                    webSecurityEnabled: false
                },
                },
                flags: ['--load-images=true'],
                debug: true
            }
        },


        phantomjsLauncher: {
            exitOnResourceError: true
        },


        singleRun: true,
        frameworks: ['mocha'],

        files: [
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/foundation-sites/dist/foundation.min.js',
                'app/tests/**/*.test.jsx',
                ],

        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },

        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
}