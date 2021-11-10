module.exports = () => {
    $.gulp.task('replaceHtml', () => {
        if ($.config.concatScripts) {
            return $.gulp.src($.config.destPath + '/**/*.html')
                .pipe($.gulpPlugin.htmlReplace({
                    scripts: '../' + $.config.scriptsPath + '/all.min.js'
                }))
                .pipe($.gulp.dest($.config.destPath + '/'));
        }

        return $.gulp.src($.config.destPath + '/**/*.html')
            .pipe($.gulp.dest($.config.destPath + '/'));
    });
};
