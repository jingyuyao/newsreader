var gulp = require('gulp');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');

var paths = {
    buildRoot: './build/',
    coffee: './src/**/*.coffee',
    staticContent: './src/**/!(*.coffee)'
};

gulp.task('coffee', function() {
    gulp.src(paths.coffee)
        .pipe(coffee()).on('error', gutil.log)
        .pipe(gulp.dest(paths.buildRoot));
});

gulp.task('static', function() {
    gulp.src(paths.staticContent)
        .pipe(gulp.dest(paths.buildRoot));
});

gulp.task('watch', function() {
    gulp.watch(paths.coffee, ['coffee']);
    gulp.watch(paths.staticContent, ['static']);
});

gulp.task('default', ['coffee', 'static']);
