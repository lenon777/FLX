const {src, dest, task, series, watch} = require('gulp');
const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const html = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

const serverTask = () => {
    return browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
};
const htmlTask = () => {
    return src('./src/*.html')
        .pipe(html({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
};
const jsTask = () => {
    return src('./src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'));
};
const lessTask = () => {
    return src('./src/less/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(sourcemaps.write())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist/css'));
};
const imgTask = () => {
    return src('./src/img/*')
        .pipe(imagemin([
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 1})
        ]))
        .pipe(gulp.dest('dist/img'))
};

task('default', series(jsTask, lessTask,htmlTask,imgTask));

exports.serve = () => {
    serverTask();
    watch('src/*.html',htmlTask);
    watch('src/js/**/*.js',jsTask);
    watch('src/less/**/*.less',lessTask);
    watch('src/img/*',imgTask);
};
