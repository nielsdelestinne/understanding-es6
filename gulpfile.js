let gulp = require("gulp");
let source = require('vinyl-source-stream');
let browserify = require("browserify");

let paths = {
    staticContent: ['./src/**/*.html', './src/**/*.css']
};

function browserifyBabelifyAndBundle() {
    return browserify("./src/main.js")
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("./dist"));
}

function copyStaticContent () {
    return gulp.src(paths.staticContent)
        .pipe(gulp.dest("./dist"));
}

gulp.task("copy-static-content", [], copyStaticContent);
gulp.task("default", ["copy-static-content"], browserifyBabelifyAndBundle);