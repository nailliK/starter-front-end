var fs = require('fs'),
	gulp = require('gulp'),
	watch = require('gulp-watch'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	livereload = require('gulp-livereload'),
	args = require('yargs').args,

	// Javascript linting and minification
	browserify = require('browserify'),
	uglify = require('gulp-uglify'),
	babelify = require('babelify'),
	autoprefixer = require('autoprefixer'),

	// scss
	scss = require('gulp-sass'),

	// Vue.js
	vueify = require('vueify'),

	// React.js
	reactify = require('reactify'),

	// ImageMin
	imagemin = require('gulp-imagemin'),

	// directory variables
	sourceDir = 'src/',
	buildDir = 'public/';


/////     GLOBAL     /////

gulp.task('svg', function() {
	'use strict';

	return gulp.src(sourceDir + 'svg/**/*')
		.pipe(gulp.dest(buildDir + 'svg'))
		.pipe(livereload());
});

gulp.task('img', function() {
	'use strict';

	return gulp.src(sourceDir + 'img/**/*')
		.pipe(gulp.dest(buildDir + 'img'))
		.pipe(livereload());
});

gulp.task('fonts', function() {
	return gulp.src(sourceDir + 'fonts/**/*')
		.pipe(gulp.dest(buildDir + 'fonts/'))
		.pipe(livereload());
});

<<<<<<< HEAD
gulp.task('json', function () {
	'use strict';

	return gulp.src(sourceDir + 'json/**/*')
		.pipe(gulp.dest(buildDir + 'json'))
=======
gulp.task('json', function() {
	return gulp.src(sourceDir + 'json/**/*')
		.pipe(gulp.dest(buildDir + 'json/'))
>>>>>>> 6265df1ae1493a21bc33a0c09f7e4dd0e822dacd
		.pipe(livereload());
});

gulp.task('scss', function() {
	return gulp.src(sourceDir + 'scss/**/*.scss')
		.pipe(scss({
			outputStyle: 'compressed'
		}).on('error', scss.logError))
		.pipe(gulp.dest(buildDir + 'css'))
		.pipe(livereload());
});

/////     VUE     /////

// Single-use Vue Gulp build task
gulp.task('build-vue', ['fonts', 'js-vue', 'img', 'svg', 'json']);

// Watch Vue build task
gulp.task('watch-vue', function() {

	// start livereload
	livereload.listen({
		'basePath': './'
	});

	// compile SCSS and Vue Components
	gulp.watch(sourceDir + 'scss/**/*', ['js-vue']);

	// compile js components
	gulp.watch(sourceDir + 'js/Vue/**/*', ['js-vue']);

	// move fonts
	gulp.watch(sourceDir + 'fonts/**/*', ['fonts']);

	// move JSON
	gulp.watch(sourceDir + 'json/**/*', ['json']);

	// optimize and move images
	gulp.watch(sourceDir + 'images/**/*', ['img']);

	// optimize and move svg
	gulp.watch(sourceDir + 'svg/**/*', ['svg']);
});

gulp.task('vue', function() {
	var b = browserify({
		entries: [sourceDir + 'js/Vue/main.js'],
		debug: true
	});

	var bundle = function() {
		return b
			.transform('babelify', {
				presets: ['es2015']
			})
			.transform(vueify, {
				sass: {
					includePaths: [sourceDir + 'scss/'],
					outputStyle: 'compressed'
				},
				postcss: [autoprefixer]
			})
			.plugin('vueify/plugins/extract-css', {
				out: buildDir + 'css/main.css'
			})
			.bundle()
			.pipe(source('main.js'))
			.pipe(buffer())
			.pipe(gulp.dest(buildDir + 'js/'));
	};

	return bundle();
});

gulp.task('js-vue', ['vue'], function() {
	return gulp.src(buildDir + 'js/main.js')
		.pipe(uglify({
			mangle: false,
			compress: false,
			preserveComments: true
		}))
		.pipe(gulp.dest(buildDir + 'js/'))
		.pipe(livereload());
});


/////     REACT     /////

// Single-use React Gulp build task
gulp.task('build-react', ['fonts', 'js-react', 'scss', 'img', 'json', 'svg']);

// Watch Vue build task
gulp.task('watch-react', function() {

	// start livereload
	livereload.listen({
		'basePath': './'
	});

	// compile SCSS
	gulp.watch(sourceDir + 'scss/**/*', ['scss']);

	// compile js components
	gulp.watch(sourceDir + 'js/React/**/*', ['js-react']);

	// move fonts
	gulp.watch(sourceDir + 'fonts/**/*', ['fonts']);

	// move JSON
	gulp.watch(sourceDir + 'json/**/*', ['json']);

	// optimize and move images
	gulp.watch(sourceDir + 'images/**/*', ['img']);

	// optimize and move svg
	gulp.watch(sourceDir + 'svg/**/*', ['svg']);
});

gulp.task('react', function() {
	var b = browserify({
		entries: [sourceDir + 'js/React/main.js'],
		debug: true
	});

	var bundle = function() {
		return b
			.transform('babelify', {
				presets: ['es2015', 'react']
			})
			.transform(reactify)
			.bundle()
			.pipe(source('main.js'))
			.pipe(buffer())
			.pipe(gulp.dest(buildDir + 'js/'));
	};

	return bundle();
});

gulp.task('js-react', ['react'], function() {
	return gulp.src(buildDir + 'js/main.js')
		.pipe(uglify({
			mangle: false,
			compress: false,
			preserveComments: true
		}))
		.pipe(gulp.dest(buildDir + 'js/'))
		.pipe(livereload());
});