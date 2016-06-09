var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var webpack = require('webpack-stream');
var del = require('del');
var eslint = require('gulp-eslint');
var notify = require('gulp-notify');

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

clientTask = function(watch) {
    gulp.src(paths.clientEntry)
        .pipe(plumber())
        .pipe(webpack({
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
        .pipe(plumber({errorHandler: notify.onError("Eslint: <%= error.message %>")}))
        .pipe(eslint())
        .pipe(eslint.format())
        // This emits an error that is caught by plumber and then passed to notify
        .pipe(eslint.failAfterError());
});

gulp.task('lint:watch', function() {
    gulp.watch(paths.allJs, ['lint']);
});

gulp.task('clean', function() {
    del(['build/']);
});

gulp.task('watch', ['lint:watch', 'server:watch', 'static:watch', 'client:watch']);

gulp.task('default', ['lint', 'server', 'static', 'client']);
