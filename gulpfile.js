const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('default', () => {
  nodemon({
    script: 'main.js',
    ext: 'js',
    env: {
    },
    ignore: ['./node_modules/**'],
  }).on('restart', () => console.log('App has been restarted'));
});
