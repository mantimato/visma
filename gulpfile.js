/* File: gulpfile.js */

// grab our packages
var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber');


    // define the default task and add the watch task to it

    gulp.task('default', ['watch']);

    // jshint task would be here

    gulp.task('jshint', function() {
    return gulp.src('source/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
    });

    gulp.task('build-css', function() {
      return gulp.src('source/scss/**/*.scss')
        .pipe(plumber()) // Handle error
        .pipe(sourcemaps.init())  // Process the original sources
          .pipe(sass({errLogToConsole: true}))
        .on('error', catchErr) // Catch the error
        .pipe(sass()) // Compile
        .pipe(sourcemaps.write()) // Add the map to modified source.
        .pipe(gulp.dest('public/assets/stylesheets'));
    });

    function catchErr(e) {
      console.log(e.formatted);
      this.emit('end');
    }

    /* updated watch task to include sass */

    gulp.task('watch', function() {
      gulp.watch('source/javascript/**/*.js', ['jshint']);
      gulp.watch('source/scss/**/*.scss', ['build-css']);
      gulp.watch('source/javascript/**/*.js', ['build-js']);
    });


    gulp.task('build-js', function() {
      return gulp.src('source/javascript/**/*.js')
        .pipe(sourcemaps.init())
          .pipe(concat('bundle.js'))
          //only uglify if gulp is ran with '--type production'
          .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/assets/javascript'));
    });
