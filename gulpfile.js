var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var webpack = require('webpack-stream');
var del = require('del');

var paths = {
    serverSrc: [
        'src/**/*.js',
        // Client build is managed by webpack
        '!src/client/**/*'
    ],
    clientEntry: 'src/client/bundle.js',
    buildRoot: 'build/',
    clientBuildRoot: 'build/client/',
    serverStatic: [
        // Everything in src
        'src/**/*',
        // except
        '!src/client/**/*',
        '!src/**/*.js',
        '!src/**/*.scss'
    ]
};

clientTask = function(watch) {
    gulp.src(paths.clientEntry)
        .pipe(plumber())
        .pipe(webpack({
            resolve: {
                extensions: ['', '.js', '.scss']
            },
            watch: watch,
            output: {
                filename: 'bundle.js'
            },
            module: {
                loaders: [
                    { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
                    { test: /\.scss$/, exclude: /node_modules/, loaders: ['style', 'css', 'sass'] }
                ]
            }
        }).on('error', gutil.log))
        .pipe(gulp.dest(paths.clientBuildRoot));
}

gulp.task('client', function() {
    clientTask(false);
});

gulp.task('client:watch', function() {
    clientTask(true);
});

gulp.task('server', function() {
    gulp.src(paths.serverSrc, {base: 'src'})
        .pipe(plumber())
        .pipe(babel().on('error', gutil.log))
        .pipe(gulp.dest(paths.buildRoot));
});

gulp.task('server:watch', function() {
    gulp.watch(paths.serverSrc, ['server']);
});

gulp.task('static', function() {
    gulp.src(paths.serverStatic, {base: 'src'})
        .pipe(plumber())
        .pipe(gulp.dest(paths.buildRoot));
});

gulp.task('static:watch', function() {
    gulp.watch(paths.serverStatic, ['static']);
});

gulp.task('clean', function() {
    del(['build/']);
});

gulp.task('watch', ['server:watch', 'static:watch', 'client:watch']);

gulp.task('default', ['server', 'static', 'client']);
