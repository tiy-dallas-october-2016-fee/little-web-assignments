var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['babel', 'babel:watch', 'start']);

gulp.task('babel', function() {
  return gulp.src(
      [
        './client/js/components/*.js',
        './client/js/router.js' //The router needs to be last, since it hooks up all the previous
      ])
      .pipe(sourcemaps.init())
      .pipe(babel({
          presets: ['es2015', 'react']
      }))
      .on('error', console.error.bind(console))
      .pipe(concat('all.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('public'));
});

gulp.task('babel:watch', function () {
  gulp.watch('./client/js/**/*.js', ['babel']);
});

gulp.task('start', function () {
  nodemon({
    script: './server/server.js',
    ext: 'js',
    env: { 'NODE_ENV': 'development' }
  })
});
