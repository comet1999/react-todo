const webpack = require('webpack');
const path    = require('path');

module.exports = {
    entry: ['script!jquery/dist/jquery.min.js',
            'script!foundation-sites/dist/foundation.min.js',
            './app/app.jsx'],

    externals: {
        jquery: 'jQuery'
    },


    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jquery': 'jquery'
        })

    ],


    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },


    resolve: {
        root: __dirname,
        modulesDirectories: ['node_modules', './app/components', './app/api'],
        alias: {
            applicationStyles: 'app/styles/app.scss'
            // , AddTodo:          'app/components/AddTodo.jsx'
            // , Search:           'app/components/Search.jsx'
            // , Todo:             'app/components/Todo.jsx'
            // , TodoApp:          'app/components/TodoApp.jsx'
            // , TodoList:         'app/components/TodoList.jsx'
        },

        extensions: ['', '.js', '.jsx']
    },



    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }

    , sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules/foundation-sites/scss')
        ]
    }

    //,devtool: 'inline-source-map'


};