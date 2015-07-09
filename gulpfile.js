var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    compass = require('gulp-compass'),
    livereload = require('gulp-livereload'),
    minifyCss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    php = require('gulp-connect-php');

gulp.task('serve', function() {
    php.server({
        base: './public'
    });
});

gulp.task('imagemin', function () {
    return gulp.src('public/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('public/img'));
});

gulp.task('stream', function () {
    gulp.src('public/css/**/*.css')
        .pipe(watch('public/css/**/*.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('minify-css', function() {
  return gulp.src('public/css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('compass', function() {
  gulp.src('./public/scss/**/*.scss')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(compass({
      css: 'public/css',
      sass: 'public/scss',
      image: 'public/img',
      style: 'expanded'
    }))
    .on('error', function(err) {
      // Would like to catch the error here 
    })
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(imagemin())
    .pipe(gulp.dest('public/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('public/scss/**/*.scss', ['compass']);
});

gulp.task('default', ['watch','compass', 'imagemin','serve']);
