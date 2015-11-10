var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var spritesmash = require('../src/index.js');

// Define our test tasks
var imagesA = [
  'test-files/sprite1.png',
  'test-files/sprite2.png',
  'test-files/sprite3.png',
  'test-files/sprite4.png',
  'test-files/sprite5.png'
];

// Define our test tasks
var imagesB = [
  'test-files/sprite1.png',
  'test-files/sprite2.png',
  'test-files/sprite3.png',
  'test-files/sprite4-diff.png',
  'test-files/sprite5.png'
];

gulp.task('sprite-default-A', function () {
  return gulp.src(imagesA)
    .pipe(spritesmith({
      imgName: './folder/sprite.png',
      cssName: 'sprite.css'
    }))
    .pipe(spritesmash())
  	.pipe(gulp.dest('actual-files/default/A/'));
});

gulp.task('sprite-default-B', function () {
  return gulp.src(imagesB)
    .pipe(spritesmith({
      imgName: './folder/sprite.png',
      cssName: 'sprite.css'
    }))
    .pipe(spritesmash())
  	.pipe(gulp.dest('actual-files/default/B/'));
});


gulp.task('sprite-scss-A', function () {
  return gulp.src(imagesA)
    .pipe(spritesmith({
      imgName: './folder/sprite.png',
      cssName: 'sprite.scss'
    }))
    .pipe(spritesmash())
  	.pipe(gulp.dest('actual-files/scss/A/'));
});

gulp.task('sprite-scss-B', function () {
  return gulp.src(imagesB)
    .pipe(spritesmith({
      imgName: './folder/sprite.png',
      cssName: 'sprite.scss'
    }))
    .pipe(spritesmash())
  	.pipe(gulp.dest('actual-files/scss/B/'));
});

gulp.task('sprite-less-A', function () {
  return gulp.src(imagesA)
    .pipe(spritesmith({
      imgName: './folder/sprite.png',
      cssName: 'sprite.less'
    }))
    .pipe(spritesmash())
  	.pipe(gulp.dest('actual-files/less/A/'));
});

gulp.task('sprite-less-B', function () {
  return gulp.src(imagesB)
    .pipe(spritesmith({
      imgName: './folder/sprite.png',
      cssName: 'sprite.less'
    }))
    .pipe(spritesmash())
  	.pipe(gulp.dest('actual-files/less/B/'));
});