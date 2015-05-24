var gulp = require('gulp');
var browser = require("browser-sync");

gulp.task("server",function(){
    browser({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("js",function() {
    gulp.src("*.js")
    .pipe(browser.reload({stream:true}))
});

gulp.task("html",function(){
    gulp.src("*.html")
    .pipe(browser.reload({stream:true}))
});

gulp.task('default',["server"], function() {
    gulp.watch(["*.js"],["js"]);
    gulp.watch(["*.html"],["html"]);
});
