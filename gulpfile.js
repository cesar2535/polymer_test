var gulp = require('gulp');

var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jade = require('gulp-jade');


gulp.task('jade', function() {
  var YOUR_LOCALS = {};
  return gulp.src('./src/**/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS,
      pretty: true
    }))
    .pipe(gulp.dest('./build'));
});

gulp.task('components', function() {
  return gulp.src('./bower_components/**', {base: './'})
    .pipe(gulp.dest('./build'));
});

gulp.task('compile',['components', 'jade']);