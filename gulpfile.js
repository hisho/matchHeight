const gulp = require("gulp");
const setting = require('./settings');
const fs = require("fs-extra");
const gulpEjs = require("gulp-ejs");
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const notify  = require('gulp-notify');
const json = JSON.parse(fs.readFileSync('src/ejs/data/json.json'));
const cards = JSON.parse(fs.readFileSync('src/ejs/data/card.json'));

const ejs = (cb) => {
  gulp
    .src('src/ejs/**/!(_)*.ejs')
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(gulpEjs({
      cards: cards.cards,
      example: json.example
    }))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest(setting.basedir));
  cb();
};

exports.ejs = ejs;

exports.watch = () => {
  gulp.watch('src/ejs/**/*.ejs', ejs);
};
