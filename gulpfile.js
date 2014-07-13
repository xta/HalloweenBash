'use strict';

// Include gulp
var gulp = require('gulp');

// Include plugins
var jshint      = require('gulp-jshint');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var jasmine     = require('gulp-jasmine');
var source      = require('vinyl-source-stream'); // makes browserify bundle compatible with gulp
var streamify   = require('gulp-streamify');
var browserify  = require('browserify');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('assets/lib/profile.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Test JS
gulp.task('specs', function () {
    return gulp.src('assets/js/spec/lib/*.js')
        .pipe(jasmine());
});

// Concatenate, Browserify & Minify JS
gulp.task('scripts', function() {
    return browserify('./assets/js/app.js').bundle()
        .pipe(source('all.min.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./public/'));
});

// Concatenate CSS
gulp.task('styles', function() {
    return gulp.src([
        './assets/css/vendor/reset.css',
        './assets/css/lib/profile.css'
        ])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('public'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('assets/css/*.css', ['styles']);
    gulp.watch('assets/js/*.js', ['specs', 'lint', 'scripts']);
    gulp.watch('assets/js/lib/*.js', ['specs', 'lint', 'scripts']);
    gulp.watch('assets/js/spec/lib/*.js', ['specs']);
});

// Default Task
gulp.task('default', ['lint', 'specs', 'scripts', 'styles', 'watch']);
