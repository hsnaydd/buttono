'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');

const reload = browserSync.reload;

const browserSyncConfigs = {
  notify: false,
  // Disable open automatically when Browsersync starts.
  open: false,
  server: ['./'],
  port: 3000,
};

gulp.task('styles', () => {
  return gulp
    .src('demo/src/**/*.scss')
    .pipe(sass({ precision: 10 }).on('error', sass.logError))
    .pipe(postcss([autoprefixer({ cascade: false })]))
    .pipe(gulp.dest('demo/dist'));
});

gulp.task('build', ['styles']);

gulp.task('serve', () => {
  browserSync(browserSyncConfigs);
  gulp.watch(['demo/src/**/*.scss'], ['styles', reload]);
});
