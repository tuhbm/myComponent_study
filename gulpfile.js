var gulp        = require('gulp');
var sourcemaps  = require('gulp-sourcemaps');
var autoprefixer= require('gulp-autoprefixer');
var sass        = require('gulp-sass');
var csslint     = require('gulp-csslint');
var concatcss   = require('gulp-concat-css');
var uglifycss   = require('gulp-uglifycss');
var rename      = require('gulp-rename');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var gulpif      = require('gulp-if');
var del         = require('del');

var config = {
    lint    : true,
    concat  : true,
    uglify  : true,
    rename  : true
};

var path ={
    js:{
        src: 'src/**/*.js',
        dest:'dist/js',
        filename:'bundle.js'
    },
    css:{
        src:'src/css/*.css',
        dest:'dist/css',
        filename:'common.css'
    },
    sass:{
        src:'src/**/*.scss'
    }
};


gulp.task('default',['watch','sass','styles','scripts']);

gulp.task('watch',function(){
    gulp.watch(path.sass.src, ['sass']),
    gulp.watch(path.css.src, ['styles']),
    gulp.watch(path.js.src, ['scripts']);
});

gulp.task('clean',function(){
   del(['dist/*']);
});

var scssOptions = {
  outputStyle : "expanded",
  indentType : "tab",
  indentWidth : 1,
  precision: 6,
  sourceComments: false
};


gulp.task('sass', function (){ 
    return gulp.src('src/scss/**/*.scss') 
        .pipe(sass(scssOptions).on('error', sass.logError)) 
        .pipe(gulp.dest('src/css'));
});


gulp.task('styles',function(){
    gulp.src(path.css.src)
        .pipe(gulpif(config.lint, csslint({'import':false})) )
        .pipe(gulpif(config.concat, concatcss(path.css.filename)) )
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(gulpif(config.rename, gulp.dest(path.css.dest)) )
        .pipe(gulpif(config.uglify ,uglifycss()) )
        .pipe(gulpif(config.rename, rename({suffix:'.min'})) )
        .pipe(gulp.dest( path.css.dest ));
    
});


gulp.task('scripts',['js:concat','js:uglify']);

gulp.task('js:concat',function(){
    gulp.src(path.js.src)
        .pipe(concat(path.js.filename))
        .pipe(gulp.dest(path.js.dest))
});
gulp.task('js:uglify',function(){
    gulp.src(path.js.dest +'/'+ path.js.filename)
        .pipe(gulpif(config.concat, uglify({
            mangle: false,
            preserveComments : 'all'
        })) )
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest(path.js.dest));
});
