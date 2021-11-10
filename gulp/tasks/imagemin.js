module.exports = () => {
    $.gulp.task('imagemin', () => {
        if (!$.config.imagemin) {
            return $.gulp.src(`${$.config.destPath}/${$.config.imagesPath}/**/*.{png,jpg,gif}`)
                .pipe($.gulp.dest(`${$.config.destPath}/${$.config.staticPath}/${$.config.imagesPath}/`));
        }

        return $.gulp.src(`${$.config.destPath}/${$.config.imagesPath}/**/*.{png,jpg,gif}`)
            .pipe($.gulpPlugin.imagemin({
                interlaced: true,
                progressive: true,
                optimizationLevel: 5
            }))
            .pipe($.gulp.dest(`${$.config.destPath}/${$.config.staticPath}/${$.config.imagesPath}/`));
    });
};
