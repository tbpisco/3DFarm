// Include gulp
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var includeSources = require('gulp-include-source');
var stripCode = require('gulp-strip-code');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function() {
    return gulp.src(['./Source/js/libs/jquery-1.11.3.min.js','./Source/js/libs/qrcode.js','./Source/js/libs/three.min.js','./Source/js/libs/DDSLoader.js','./Source/js/libs/MTLLoader.js','./Source/js/libs/OBJLoader.js','./Source/js/libs/OrbitControls.js','./Source/js/libs/StereoEffect.js','./Source/js/libs/DeviceOrientationControls.js', './Source/js/package.js','./Source/js/app/**/**/!(*.test).js','./Source/js/game.js'])
        .pipe(sourcemaps.init())
          .pipe(stripCode({
            start_comment: "test-code",
            end_comment: "end-test-code"
          }))
          .pipe(concat('game.js'))
        	.pipe(rename({suffix: '.min'}))
        	.pipe(uglify())
        .pipe(sourcemaps.write("maps"))
      	.pipe(gulp.dest('Build/js'));
});

gulp.task('html', function() {
  return gulp.src( './Source/index.debug.html' )
    .pipe( includeSources() )
    .pipe( gulp.dest('./Build/') );
});

gulp.task('styles', function () {
  gulp.src('./Source/scss/**/*.scss')
    .pipe(sass())    
    .pipe(gulp.dest('./Source/css'))
    .pipe(gulp.dest('./Build/css'));
});


 gulp.task('images', function() {
  return gulp.src('./Source/images/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest('./Build/images/'));
});

 gulp.task('copy-fonts', function() {
    gulp.src('./Source/fonts/*')
       .pipe(gulp.dest('./Build/fonts/'));
});

/*gulp.task('sass', function() {
    return sass('src/scss/')
        .pipe(gulp.dest('build/css'));
});*/

gulp.task('watch', function() {
   // Watch .js files
  //gulp.watch('./Source/js/**/**/*.js', ['scripts']);
   // Watch .scss files
  gulp.watch('./Source/scss/**/**/*.scss', ['styles']);
   // Watch image files
 // gulp.watch('./Source/imgs/**/*', ['images']);
 });

 // Default Task
gulp.task('default', ['scripts','styles','images','copy-fonts','watch']);