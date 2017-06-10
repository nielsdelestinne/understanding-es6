let gulp = require("gulp");
let source = require('vinyl-source-stream');
let browserify = require("browserify");

let paths = {
    staticContent: ['./src/**/*.html', './src/**/*.css']
};

function browserifyBabelifyAndBundle() {
    return browserify({
        entries: ["./src/modules/oefeningen/oef1.js", "./src/modules/oefeningen/titlePrinter.js",
            "./src/modules/oefeningen/oef2_chefkok.js", "./src/modules/oefeningen/hamburger.js",
            "./src/modules/oefeningen/oef3_doorgeefluik.js", "./src/modules/oefeningen/luik.js", "./src/modules/oefeningen/keuken.js",
            "./src/modules/oefeningen/oef4_afwas.js", "./src/modules/oefeningen/afwas.js",
        ],
        debug: true
    })
        .transform("babelify", {presets: ["es2015"]})
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("./dist"));
}

function copyStaticContent() {
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
