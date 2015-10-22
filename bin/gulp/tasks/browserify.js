'use strict';

var gulp        = require('gulp');
var gutil       = require('gulp-util');

// Browserify
var source     = require('vinyl-source-stream'); // Used to stream bundle for further handling
var buffer     = require('vinyl-buffer');
var browserify = require('browserify');
var watchify   = require('watchify');
var babelify   = require('babelify');
var rename = require('gulp-rename');

var config = require('../configs/config.js');

gulp.task('browserify', function() {
    /*
     * Cette chose nous permet d'avoir un vrai environnement de dev js avec des require()
     * Par exemple pour appeler jquery (après l'avoir installer avec npm) > $ = require('jquery')
     * On peut maintenant utiliser jquery avec la variable $ */

    var bundler = browserify({
        entries: [config.dev.base + 'index.js'],
        debug: true,
        standalone : 'flyd',
        cache: {},
        packageCache: {},
        fullPaths: true
    }).transform(babelify.configure({
        optional : "es7"
    }));

    var watcher  = watchify(bundler);

    return watcher
        .on('update', function () {
            var updateStart = Date.now();
            console.log('Hello doge');
            watcher.bundle()
                .on('error', gutil.log.bind(gutil, 'Browserify Error', gutil.colors.red('411')))
                .pipe(source(config.dev.base + 'index.js'))
                .pipe(buffer())
                .on('error', gutil.log)
                .pipe(rename('build.js'))
                .pipe(gulp.dest(config.dev.js));
            console.log('Such build : ', (Date.now() - updateStart) + 'ms');
        })
        .transform(babelify.configure({
            optional : "es7"
        }))
        .bundle() // Cré le bundle initial lors du lancement de la commande
        .on('error', gutil.log.bind(gutil, 'Browserify Error', gutil.colors.red('411')))
        .pipe(source(config.dev.base + 'index.js'))
        .pipe(rename('build.js'))
        .pipe(gulp.dest(config.dev.js));
});