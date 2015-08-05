'use strict';

var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    minifycss       = require('gulp-minify-css'),
    rename          = require('gulp-rename'),
    jade            = require('gulp-jade'),
    merge           = require('merge-stream'),
    autoprefixer    = require('gulp-autoprefixer'),
    sourcemaps      = require('gulp-sourcemaps');


// sass compile task:

gulp.task('sass', function () {

    return gulp.src('toCompile/sass/style.scss')
        .pipe(sourcemaps.init())
            .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write({includeContent: false}))
        .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(autoprefixer())
            .pipe(gulp.dest('css/'))
        .pipe(sourcemaps.write({includeContent: true}))
            .pipe(rename({suffix: '.min'}))
            .pipe(minifycss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css/'));

});

gulp.task('sass:watch', function () {
    gulp.watch('toCompile/sass/**/*.scss', ['sass']);
});

// jade compile task

gulp.task('jade', function () {

        // compile all the jade files
    var allTemplates = gulp.src(['toCompile/jade/**/*.jade', '!toCompile/jade/index.jade' ])
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('html/'))

        // compile the index file    
    var index = gulp.src('toCompile/jade/index.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest(''));

    return merge(allTemplates, index);

});

gulp.task('jade:watch', function () {
    gulp.watch('toCompile/jade/**/*.jade', ['jade']);
});

// watch task
gulp.task('watch', function() {

    gulp.watch('toCompile/sass/**/*.scss', ['sass']);
    gulp.watch('toCompile/jade/**/*.jade', ['jade']);

    // since we dont have any task yet related to this files is not important to watch them
    // gulp.watch('html/**/*.html');
    // gulp.watch('css/**/*.css');
    // gulp.watch('js/**/*.js');
});

gulp.task('default', ['sass', 'jade', 'watch'], function() {

});