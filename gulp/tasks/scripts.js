module.exports = () => {
  $.gulp.task('scripts:libs', () => {
    return $.gulp.src($.config.supportJsLibs)
      .pipe($.gulpPlugin.concat('support-libs.js'))
      .pipe($.gulp.dest(`${$.config.tmpPath}/${$.config.staticPath}/${$.config.scriptsPath}/`))
  });

  $.gulp.task('scripts', () => {
    if ($.config.babel && $.argv._[0] === 'build') {
      return $.gulp.src([`${$.config.sourcePath}/${$.config.scriptsPath}/**`])
        .pipe($.gulpPlugin.babel({
          ignore: `${$.config.sourcePath}/${$.config.staticPath}/${$.config.scriptsPath}/libs/**`,
        })).on('error', function (err) {
          console.log('[Compilation Error]');
          console.log(err.fileName + ( err.loc ? `( ${err.loc.line}, ${err.loc.column} ): ` : ': '));
          console.log('error Babel: ' + err.message + '\n');
          console.log(err.codeFrame);

          this.emit('end');
        })
        .pipe($.gulp.dest(`${$.config.tmpPath}/${$.config.staticPath}/${$.config.scriptsPath}/`))
        .pipe($.bs.reload({ stream: true }));
    }
    return $.gulp.src([`${$.config.sourcePath}/${$.config.scriptsPath}/**`])
      .pipe($.gulp.dest(`${$.config.tmpPath}/${$.config.staticPath}/${$.config.scriptsPath}/`))
      .pipe($.bs.reload({ stream: true }));
  });

  /*$.gulp.task('prepareJs', () => {
    const buildPath = $.config.destPath + '/' + $.config.staticPath + '/js';

    if (!$.config.concatScripts) {
      return $.gulp.src($.config.tmpPath + '/' + $.config.staticPath + '/js/!**!/!*')
        .pipe($.gulp.dest(buildPath));
    }

    return $.gulpPlugin.domSrc({
        file: $.config.concatFilePath ? $.config.tmpPath + '/' + $.config.concatFilePath : $.config.tmpPath + '/index.html',
        selector: 'script',
        attribute: 'src'
      })
      .pipe($.gulpPlugin.concat('all.js'))
      .pipe($.gulp.dest(buildPath))
      .pipe($.gulpPlugin.uglify())
      .pipe($.gulpPlugin.rename('all.min.js'))
      .pipe($.gulp.dest(buildPath));
  });*/
};
