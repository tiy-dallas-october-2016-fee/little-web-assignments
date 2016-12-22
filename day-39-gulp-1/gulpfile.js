var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');



gulp.task('default', ['sass', 'sass:watch', 'affirm', 'start', 'babel', 'babel:watch']);

gulp.task('sass', function () {
  return gulp.src('./client/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./client/scss/**/*.scss', ['sass']);
});

gulp.task('affirm', function() {
  console.log('You look handsome today.');
});

gulp.task('start', function () {
  nodemon({
    script: './server/server.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  })
});

gulp.task('babel', function() {
  return gulp.src('./client/js/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel({
          presets: ['es2015', 'react']
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('public'));
});

gulp.task('babel:watch', function () {
  gulp.watch('./client/js/**/*.js', ['babel']);
});
