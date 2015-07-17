'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    jade = require('gulp-jade');

gulp.task('sass-jade', function () {
    gulp.src('toCompile/sass/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('css/'));

    gulp.src(['toCompile/jade/**/*.jade', '!toCompile/jade/index.jade' ])
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('html/'));

    // compile index.html file    
    gulp.src('toCompile/jade/index.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(''));
});

gulp.task('sass-jade:watch', function () {
    gulp.watch(['toCompile/sass/**/*.scss', 'toCompile/jade/**/*.jade'], ['sass-jade']);
});

gulp.task('watch', function() {
    gulp.watch(['toCompile/sass/**/*.scss', 'toCompile/jade/**/*.jade'], ['sass-jade']);
    gulp.watch('html/**/*.html');
    gulp.watch('css/**/*.css');
    gulp.watch('js/**/*.js');
});

gulp.task('default', ['sass-jade', 'watch'], function() {

});