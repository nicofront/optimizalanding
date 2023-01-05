// Modules
const gulp = require('gulp');
const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

// File Paths
const files = {
    scssPath: 'dev/scss/**/*.scss',
    jsPath: 'dev/js/**/*.js'
}

// Sass Task
function scssTask() {
    return gulp
        .src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream());
}

// JS Task
function jsTask() {
    return gulp
        .src(files.jsPath)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('dist/js')
    );
}

// Image Task
function imgTask(){
    return gulp
    .src('dev/img/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true,
        })))
        .pipe(gulp.dest('dist/img'))
}

// Font Task
function fontTask(){
    return gulp
    .src('dev/fonts/**/*.+(eot|svg|ttf|wof|woff2)')
        .pipe(gulp.dest('dist/fonts'))
}

// Cache
const cbString = new Date().getTime();
function cacheTask(){
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'))
}

// Watch Files
function watchTask(){
    browserSync.init({
        server: {
            baseDir: './',
            index: "index.html"
        }
    });
    watch("./**/*.html").on("change", reload);
    watch([files.scssPath, files.jsPath],
        parallel(scssTask, jsTask));
}

exports.default = series(
    parallel(scssTask, jsTask),
    cacheTask,
    imgTask,
    fontTask,
    watchTask    
);