'use strict';

var gulp        = require('gulp');
var gutil       = require('gulp-util');

// Browserify
var source     = require('vinyl-source-stream'); // Used to stream bundle for further handling
var buffer     = require('vinyl-buffer');
var browserify = require('browserify');
var uglify     = require('gulp-uglify');
var babelify   = require('babelify');

var config = require('../configs/config.js');

gulp.task('browserify-prod', function() {

    var bundler = browserify({
        entries: [config.dev.base + 'index.js'],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    }).transform(babelify);

    bundler
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error', gutil.colors.red('411')))
        .pipe(source(config.dev.base + 'index.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(config.prod));
});