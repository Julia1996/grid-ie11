'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  return gulp.src('css/styles.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
      grid: true // !!!!!!!!!!!! IMPORTANT !!!!!!!!!!!!!!!!!
    }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('build', ['styles']);

gulp.task('watch', function() {
  gulp.watch(['less/*.less', 'css/*.css'], ['build']);
});

gulp.task('dev', ['build', 'watch']);