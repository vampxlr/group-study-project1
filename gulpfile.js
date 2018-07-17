var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('Styles', ["sass"], function () { });

gulp.task('sass', function () {
    gulp.src(['styles/**/*.scss'])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./styles'));
});
gulp.task('watch', function () {
    gulp.watch('./**/*.scss', ['sass']);
});