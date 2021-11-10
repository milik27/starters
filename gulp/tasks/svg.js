module.exports = () => {
  $.gulp.task('svg:sprite', function () {
    return $.gulp.src(`${$.config.sourcePath}/${$.config.svgSpritePath}/**/*.svg`)
      .pipe($.gulpPlugin.svgmin())
      .pipe($.gulpPlugin.svgSprite({
        mode: {
          symbol: {
            sprite: '../sprite.svg',
          },
        }
      }))
      .pipe($.gulp.dest(`${$.config.tmpPath}/${$.config.staticPath}/${$.config.svgSpritePath}/`))
      .pipe($.bs.reload({stream: true}));
  });
  $.gulp.task('svg', function () {
    return $.gulp.src(`${$.config.sourcePath}/${$.config.svgPath}/**/*.svg`)
      .pipe($.gulpPlugin.svgmin())
      .pipe($.gulp.dest(`${$.config.tmpPath}/${$.config.staticPath}/${$.config.svgPath}/`))
      .pipe($.bs.reload({stream: true}));
  });
}
