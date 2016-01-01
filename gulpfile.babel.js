'use strict';

import gulp from 'gulp'
import del from 'del'
import runSequence from 'run-sequence'
const $ = require('gulp-load-plugins')()

gulp.task('copy', () => {
  return gulp.src([
    'app/**/*',                     // copy all folders and files
    '!app/bower_components{,/**}'   // exclude bower_components folder
  ], {
    base: 'app',
    dot: true
  }).pipe(gulp.dest('dist'))
})

gulp.task('copy-libs', () => {
  return gulp.src([
    'app/bower_components/jquery/dist/jquery.min.js'
  ]).pipe(gulp.dest('./dist/scripts/'))
})

gulp.task('build', (cb) => {
  runSequence(['copy', 'copy-libs'], cb)
})

gulp.task('default', ['build'], () => {
  gulp.watch(['./app/**/*'], ['default'])
})
