var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var $ = require('gulp-load-plugins')();

gulp.task('copy', function () {
  return gulp.src([
    'app/**/*',                     // copy all folders and files
    '!app/bower_components{,/**}'   // exclude bower_components folder
  ], {
    base: 'app',
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('copy-libs', function () {
  return gulp.src([
    'app/bower_components/jquery/dist/jquery.min.js'
  ]).pipe(gulp.dest('./dist/scripts/'));
});

gulp.task('build', function (cb) {
  runSequence(['copy', 'copy-libs'], cb);
});

gulp.task('default', ['build'], function () {
  gulp.watch(['./app/**/*'], ['default']);
});
