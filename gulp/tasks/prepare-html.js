module.exports = () => {
  $.gulp.task('prepareHtml', function () {
    return $.gulp.src([`${$.config.sourcePath}/${$.config.htmlPath}/**/*.html`])
      .pipe($.gulp.dest(`${$.config.tmpPath}/`))
      .pipe($.bs.reload({stream: true}));
  });
};
