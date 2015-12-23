var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var config = require('../configs/config.js');

gulp.task('browsersync', function() {
    browserSync.init({
        server: {
            baseDir: '../',
            index: "exemples/index.html"
        }
        //browser: "FirefoxDeveloperEdition"
    });

    gulp.watch([config.dev.html + "*.html", config.dev.js+"*.js"]).on('change', browserSync.reload);

});