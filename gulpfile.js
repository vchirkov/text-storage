/**
 * Created by vlad.chirkov on 31.1.17.
 */
var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('build-app', function () {
    return gulp.src('src/app/index.js')
        .pipe(webpack(require('./src/app/webpack.config.js')))
        .pipe(gulp.dest('dist/app'));
});

gulp.task('build-popup', function () {
    return gulp.src('src/popup/index.js')
        .pipe(webpack(require('./src/popup/webpack.config.js')))
        .pipe(gulp.dest('dist/popup'));
});


gulp.task('build-content', function () {
    return gulp.src('src/content-scripts/index.js')
        .pipe(webpack(require('./src/content-scripts/webpack.config.js')))
        .pipe(gulp.dest('dist/content-scripts'));
});

gulp.task('build-background', function () {
    return gulp.src('src/background/index.js')
        .pipe(webpack(require('./src/background/webpack.config.js')))
        .pipe(gulp.dest('dist/background'));
});

gulp.task('manifest', function () {
    return gulp.src('./src/manifest.json')
        .pipe(gulp.dest('dist'));
});

gulp.task('resources', ['manifest'], function () {
    return gulp.src('./src/resources/**/*')
        .pipe(gulp.dest('dist/resources'));
});


gulp.task('default', ['build-app','build-popup', 'build-content', 'build-background', 'manifest', 'resources']);