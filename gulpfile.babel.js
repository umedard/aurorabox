import gulp from "gulp";
import sass from "gulp-sass";
import cleanCSS from "gulp-clean-css";
import imagemin from "gulp-imagemin";
import browserSync from "browser-sync";
import concat from "gulp-concat";
import babel from "gulp-babel";

const sassOptions = { outputStyle: "expanded", errLogToConsole: true };

exports.sass = () =>
  gulp
    .src("./src/scss/styles.scss")
    .pipe(sass(sassOptions))
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.reload({ stream: true }));

exports.images = () =>
  gulp
    .src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"))
    .pipe(browserSync.reload({ stream: true }));

exports.copy = () =>
  gulp
    .src("./src/*.html")
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.reload({ stream: true }));

exports.minifycss = () =>
  gulp
    .src("./dist/styles.css")
    .pipe(cleanCSS({ compatibility: "ie8", level: 2 }))
    .pipe(gulp.dest("dist"));

exports.packjs = () =>
  gulp
    .src("./src/js/*.js")
    .pipe(
      babel({
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                chrome: "58",
                ie: "11",
              },
            },
          ],
        ],
      })
    )
    .pipe(concat("bundle.js"))
    .pipe(gulp.dest("./dist/js"));

gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: "./dist",
      index: "index.html",
    },
    notify: false,
    injectChanges: true,
  });
  gulp.watch("./src/scss/**/*", gulp.series("sass"));
  gulp.watch("./src/images/**/*", gulp.series("images"));
  gulp.watch("./src/*.html", gulp.series("copy"));
  gulp.watch("./src/js/*.js", gulp.series("packjs"));
  gulp.watch("./dist/*").on("change", browserSync.reload);
});

gulp.task("default", gulp.series("serve"));
