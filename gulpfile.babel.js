'use strict';

import gulp from 'gulp'
import del from 'del'
import runSequence from 'run-sequence'
const $ = require('gulp-load-plugins')()

gulp.task('default', ['build'], () => {
  gulp.watch(['./app/**/*'], ['default'])
})

gulp.task('copy', () => {
  const src = [
    './app/**/*',                     // copy all folders and files
    '!./app/bower_components{,/**}',  // exclude bower_components folder,
    '!./app/scripts{,/**}'            // exclude scripts folder
  ]
  const dest = 'dist'

  return pipe(src, dest)
})

gulp.task('copy-libs', () => {
  const src = 'app/bower_components/jquery/dist/jquery.min.js'
  const dest = 'dist/scripts/'
  return pipe(src, dest)
})

gulp.task('buildJs', () => {
  const src = 'app/scripts/*.js'
  const dest = 'dist/scripts/'
  return pipe(src, $.babel(), dest)
})

gulp.task('build', (cb) => {
  runSequence(['copy', 'copy-libs', 'buildJs'], cb)
})

// Helpers
function pipe(src, ...transforms) {
  return transforms.reduce((stream, transform) => {
    const isDest = typeof transform === 'string'
    return stream.pipe(isDest ? gulp.dest(transform) : transform)
  }, gulp.src(src))
}
