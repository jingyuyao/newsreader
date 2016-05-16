var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var del = require('del');

var paths = {
    buildRoot: './build/',
    coffee: './src/**/*.coffee',
    sass: './src/**/*.scss',
    staticContent: [
        // Everything in src
        './src/**/*',
        // except
        '!./src/**/*.coffee',
        '!./src/**/*.scss'
    ]
};

gulp.task('coffee', function() {
    gulp.src(paths.coffee)
        .pipe(coffee()).on('error', gutil.log)
        .pipe(gulp.dest(paths.buildRoot));
});

gulp.task('sass', function() {
    gulp.src(paths.sass)
        .pipe(sass()).on('error', gutil.log)
        .pipe(gulp.dest(paths.buildRoot));
});

gulp.task('static', function() {
    gulp.src(paths.staticContent)
        .pipe(gulp.dest(paths.buildRoot));
});

gulp.task('clean', function() {
    del(['build/']);
});

gulp.task('watch', function() {
    gulp.watch(paths.coffee, ['coffee']);
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.staticContent, ['static']);
});

gulp.task('default', ['clean', 'coffee', 'sass', 'static']);
