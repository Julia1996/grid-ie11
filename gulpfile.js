'use strict';

const gulp = require('gulp');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const less = require('gulp-less');

gulp.task('clean', function(){
  return del('public/css');
});

gulp.task('styles', function() {
  return gulp.src('less/all.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('public/css'));
});

gulp.task('build', ['clean', 'styles']);

gulp.task('watch', function() {
  gulp.watch(['less/*.less', 'css/*.css'], ['build']);
});

gulp.task('dev', ['build', 'watch']);