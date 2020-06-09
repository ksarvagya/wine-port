// Include gulp
var gulp = require('gulp');

var sass = require('gulp-sass');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('public/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('public/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);
