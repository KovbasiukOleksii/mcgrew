const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');


gulp.task('sass', () => {
   return gulp.src('./style/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: ''}).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/style/'));
});
gulp.task('watch', () => {
    gulp.watch('./style/**/*.scss', gulp.series('sass'))
});