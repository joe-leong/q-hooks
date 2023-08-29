const commonFile = require('../../gulpfile');
const gulp = require('gulp');

exports.default = gulp.series(commonFile.default);
