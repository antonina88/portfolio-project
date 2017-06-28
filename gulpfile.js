var gulp = require('gulp'), 
	imagemin = require('gulp-imagemin'),
	cssmin = require('gulp-minify-css'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),   
	//uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	pngquant = require('imagemin-pngquant'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var path = {
    build: { 
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fontAwesome: 'build/font-awesome/**/**/*.*'
    },
    src: { 
        html: 'src/*.html', 
        js: 'src/js/main.js',
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*',
        fontAwesome: 'src/font-awesome/**/**/*.*'
    },
    watch: { 
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        fontAwesome: 'src/font-awesome/**/**/*.*'
    }
};
var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 8080,
    logPrefix: "Frontend"
};
gulp.task('html:build', function () {
    gulp.src(path.src.html) 
        .pipe(gulp.dest(path.build.html)) 
        .pipe(reload({stream: true})); 
});
gulp.task('js:build', function () {
     gulp.src('src/js/main.js')
  		.pipe(sourcemaps.init()) 
       // .pipe(uglify()) 
        .pipe(sourcemaps.write()) 
        .pipe(gulp.dest(path.build.js)) 
        .pipe(reload({stream: true}));
});
gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sourcemaps.init()) 
        .pipe(sass()) 
        .pipe(cssmin()) 
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css)) 
        .pipe(reload({stream: true}));
});
gulp.task('image:build', function () {
    gulp.src(path.src.img)
         .pipe(imagemin({ 
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) 
        .pipe(reload({stream: true}));
});

gulp.task('icons:build', function() {
    gulp.src(path.src.fontAwesome)
        .pipe(gulp.dest(path.build.fontAwesome))
});

gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
});
gulp.task('webserver', function () {
    browserSync(config);
});
gulp.task('default', ['html:build', 'js:build', 'style:build', 'image:build', 'webserver', 'watch']);