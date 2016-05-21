var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var del = require('del');

var paths = {
    buildRoot: 'build/',
    buildCssRoot: 'build/client/css/',
    coffee: 'src/**/*.coffee',
    sass: 'src/**/*.scss',
    staticContent: [
        // Everything in src
        'src/**/*',
        // except
        '!src/**/*.coffee',
        '!src/**/*.scss'
    ]
};

gulp.task('coffee', function() {
    gulp.src(paths.coffee, {base: 'src'})
        .pipe(
            coffee({
                // No need to wrap files in anonymous function
                // since we are using requirejs
                bare: true
            }).on('error', gutil.log))
        .pipe(gulp.dest(paths.buildRoot));
});

gulp.task('sass', function() {
    gulp.src(paths.sass)
        .pipe(sass().on('error', gutil.log))
        .pipe(gulp.dest(paths.buildRoot));
});

gulp.task('static', function() {
    gulp.src(paths.staticContent, {base: 'src'})
        .pipe(gulp.dest(paths.buildRoot));
});

gulp.task('clean', function() {
    del(['build/']);
});

gulp.task('watch', ['default'], function() {
    gulp.watch(paths.coffee, ['coffee']);
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.staticContent, ['static']);
});

gulp.task('default', ['coffee', 'sass', 'static']);
