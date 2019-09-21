'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const browserSyncBase = require('browser-sync');

const browserSync = browserSyncBase.create();

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

gulp.task('build', gulp.series('styles'));

// Reload
gulp.task('reload', cb => {
  browserSync.reload();
  cb();
});

gulp.task('serve', () => {
  browserSync.init(browserSyncConfigs);

  gulp.watch(['_buttono.scss', 'demo/src/**/*.scss'], gulp.series('styles', 'reload'));
});
