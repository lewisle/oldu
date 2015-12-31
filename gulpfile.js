var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var del = require('del');
var runSequence = require('run-sequence');
var $ = gulpLoadPlugins();

gulp.task('extras', function () {
  return gulp.src([
    'app/**/*'
  ], {
    base: 'app',
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('default', function (cb) {
  runSequence(['extras'], cb);
});
