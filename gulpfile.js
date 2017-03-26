let gulp = require("gulp");
let source = require('vinyl-source-stream');
let browserify = require("browserify");

let paths = {
    staticContent: ['./src/**/*.html', './src/**/*.css']
};

function browserifyBabelifyAndBundle() {
    return browserify({
            entries: ["./src/destructuring.js", "./src/expandedObjectFunctionality.js"],
            debug: true
        })
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("./dist"));
}

function copyStaticContent () {
    return gulp.src(paths.staticContent)
        .pipe(gulp.dest("./dist"));
}

function benJeBlij() {
    console.log("---- I am but a mere piece of code, therefore I am not...");
}

gulp.task("copy-static-content", [], copyStaticContent);
gulp.task("browserify-babelify-and-bundle", [], browserifyBabelifyAndBundle);
gulp.task("ben-je-blij?", [], benJeBlij);
gulp.task("default", ["copy-static-content", "browserify-babelify-and-bundle", "ben-je-blij?"]);
