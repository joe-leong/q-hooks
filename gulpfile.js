const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');

gulp.task('clean', async function () {
  await del('lib/**');
  await del('es/**');
  await del('dist/**');
});

gulp.task('es', function () {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  });

  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'));
});

exports.default = gulp.series('clean', 'es');
