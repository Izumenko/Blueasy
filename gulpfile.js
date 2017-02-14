var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
    files: ['styles/*.css', '*.html']
  })
})

gulp.task('watch', ['browserSync'], function (){
  gulp.watch('styles/style.css'); 
})