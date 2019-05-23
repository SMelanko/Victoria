const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('default', () => {
  nodemon({
    script: 'main.js',
    args: [],
    nodeArgs: ['-r', 'esm'],
    ext: 'js,ejs',
    env: {
      NODE_ENV: 'dev',
    },
    ignore: ['./node_modules/**'],
  }).on('restart');
});
