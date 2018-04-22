var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("styles", function() {
  gulp
    .src("css/styles.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"));
});

gulp.task("watch", function() {
  gulp.watch("css/styles.css", ["styles"]);
});

// const gulp = require("gulp");
// const autoprefixer = require("gulp-autoprefixer");

// gulp.task("styles", () => {
//   gulp
//     .src("css/styles.css")
//     .pipe(autoprefixer())
//     .pipe(gulp.dest("build"));
// });

// gulp.task("watch", () => {
//   gulp.watch("css/styles.css", ["styles"]);
// });
