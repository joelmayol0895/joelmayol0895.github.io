const gulp = require('gulp');
const sass = require("gulp-sass")(require("node-sass"));
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
    // 1. where is scss file
    //    return gulp.src('./scss/**/*.scss')
    // 1. where is speficic scss file
        return gulp.src('./scss/*main.scss')
    // 2. pass that file through sass compiler
        .pipe(sass().on('error', sass.logError))
    // 3. where do I save the compiled CSS?
        .pipe(gulp.dest('./css'))
    // 4. stream changes to all browser
        .pipe(browserSync.stream());    
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload)
} 

exports.style = style;
exports.watch = watch;