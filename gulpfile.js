'use strict';

// Include gulp
var gulp = require('gulp');

// Include plugins
var jshint  = require('gulp-jshint');
var sass    = require('gulp-sass');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var jasmine = require('gulp-jasmine');

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

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([
                './assets/js/vendor/jquery-1.8.2.js',
                './assets/js/vendor/jquery.ui.core.js',
                './assets/js/vendor/jquery.ui.widget.js',
                './assets/js/vendor/jquery.ui.mouse.js',
                './assets/js/vendor/jquery.ui.sortable.js',
                './assets/js/init.js',
                './assets/js/lib/profile.js'
            ])
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public'));
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
    gulp.watch('assets/js/lib/*.js', ['specs', 'lint', 'scripts']);
    gulp.watch('assets/js/spec/lib/*.js', ['specs']);
});

// Default Task
gulp.task('default', ['lint', 'specs', 'scripts', 'styles', 'watch']);
