module.exports = () => {
   $.gulp.task('watch', () => {
     $.gulp.watch([`${$.config.sourcePath}/${$.config.stylesPath}/**/*.{scss, sass, css}`], $.gulp.series('styles'));
     $.gulp.watch([`${$.config.sourcePath}/${$.config.svgPath}/**/*.svg`], $.gulp.series('svg'));
     $.gulp.watch([`${$.config.sourcePath}/${$.config.svgSpritePath}/**/*.svg`], $.gulp.series('svg:sprite'));
     $.gulp.watch([`${$.config.sourcePath}/${$.config.htmlPath}/**/*`], $.gulp.series(['prepareHtml']));
     $.gulp.watch([`${$.config.sourcePath}/${$.config.contentPath}'/**/*`], $.gulp.series(['content']));
     $.gulp.watch([`${$.config.sourcePath}/${$.config.imagesPath}'/**/*`], $.gulp.series(['imagemin']));
     $.gulp.watch([`${$.config.sourcePath}/${$.config.scriptsPath}/**/*.js`], $.gulp.series('scripts'));
   });
};
