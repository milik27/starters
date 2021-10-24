"use strict"

global.$ = {
  gulp: require('gulp'),
  gulpPlugin: require('gulp-load-plugins')({
    postRequireTransforms: {
      sass: function(sass) {
        return sass(require('sass'));
      }
    }
  }),
  bs: require('browser-sync'),
  // fs: require('fs'),
  del: require('del'),
  tasks: require('./gulp/tasks.js'),
  config: require('./config/config.json'),
  // merge: require('merge-stream'),
  // argv: require('yargs').argv
}

$.tasks.forEach(taskPath => {
  require(taskPath)()
});

$.gulp.task('dev', $.gulp.series(
  $.gulp.parallel('clean'),
  $.gulp.parallel('styles'),
))

$.gulp.task('build', $.gulp.series(
  $.gulp.parallel('clean'),
))

/*
if ($.config.criticalCss) {
  $.critical = require('critical').stream
}

$.tasks.forEach(taskPath => {
  require(taskPath)()
});

$.gulp.task('dev', $.gulp.series(
  $.gulp.parallel('clean'),
  $.gulp.parallel('hbs', 'styles', 'scripts', 'scripts:libs', 'hbs', 'svg', 'svgInline', 'pngSprite'),
  $.gulp.parallel('prepareHtml'),
  $.gulp.parallel('watch', 'serve')
));

$.gulp.task('build', $.gulp.series(
  $.gulp.parallel('clean'),
  $.gulp.parallel('styles', 'scripts:libs', 'scripts'),
  $.gulp.parallel('hbs', 'svg', 'svgInline', 'pngSprite', 'static:fonts', 'static:images'),
  $.gulp.parallel('prepareHtml'),
  $.gulp.parallel('dist', 'content', 'copyMetaFiles'),
  $.gulp.parallel('imagemin:meta', 'imagemin:content', 'prepareJs', 'criticalCss'),
  $.gulp.parallel('replaceHtml')
));*/
