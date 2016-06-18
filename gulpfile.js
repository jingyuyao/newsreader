var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var del = require('del');
var eslint = require('gulp-eslint');

var paths = {
    buildRoot: 'build/',
    clientBuildRoot: 'build/client/',

    allJs: 'src/**/*.js',
    clientEntry: 'src/client/bundle.js',
    serverJs: [
        'src/**/*.js',
        '!src/client/**/*'
    ],
    staticFiles: [
        // Everything in src
        'src/**/*',
        // except
        '!src/**/*.js',
        '!src/**/*.scss'
    ]
};

var clientTask = function(watch) {
    gulp.src(paths.clientEntry)
        .pipe(plumber())
        .pipe(webpackStream({
            devtool: 'source-map',
            resolve: {
                extensions: ['', '.js', '.scss']
            },
            watch: watch,
            output: {
                filename: 'bundle.js'
            },
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
                    { test: /\.css$/, loaders: ['style', 'css'] },
                    { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
                ]
            }
            // plugins: [
            //     new webpack.optimize.UglifyJsPlugin({
            //         compress: {
            //             warnings: false
            //         }
            //     })
            // ]
        }).on('error', gutil.log))
        .pipe(gulp.dest(paths.clientBuildRoot));
};

gulp.task('client', function() {
    clientTask(false);
});

gulp.task('client:watch', function() {
    clientTask(true);
});

gulp.task('server', function() {
    gulp.src(paths.serverJs, {base: 'src'})
        .pipe(plumber())
        .pipe(babel().on('error', gutil.log))
        .pipe(gulp.dest(paths.buildRoot));
});

gulp.task('server:watch', function() {
    gulp.watch(paths.serverJs, ['server']);
});

gulp.task('static', function() {
    gulp.src(paths.staticFiles, {base: 'src'})
        .pipe(plumber())
        .pipe(gulp.dest(paths.buildRoot));
});

gulp.task('static:watch', function() {
    gulp.watch(paths.staticFiles, ['static']);
});

gulp.task('lint', function() {
    return gulp.src(paths.allJs)
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('lint:watch', function() {
    gulp.watch(paths.allJs, ['lint']);
});

gulp.task('clean', function() {
    del(['build/']);
});

gulp.task('watch', ['server:watch', 'static:watch', 'client:watch']);

gulp.task('default', ['server', 'static', 'client']);
