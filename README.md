# Maquetado

Maquetado is an starting repository for web apps that comes already with gulp tasks to compile [SCSS][1] and [Jade][2] files into CSS and HTML using task runner [Gulp][3].

##how to
```
$ git clone https://github.com/gillchristian/Maquetado.git directory-name
$ cd directory-name
$ npm install
$ gulp
```

##tastks
`$ gulp sass` compiles scss files in `toCompile/sass` into `css/style.min.css`, also adds the CSS prefixes and creates the `source map` file.

`$ gulp jade` compiles jade files in `toCompile/jade` directory to `html` directory, `toCompile/jade/index.jade` compiles to the root directory. Files inside `toCompile/jade/includes` are excluded (_excluded includes :flushed:_), use the folder to place the files you are including in other files and thus they are being compiled already.

`$ gulp watch` watches `sass` and `jade` tasks.

default task `gulp` runs `watch`.

##used dependencies

- [_gulp-sass_](https://www.npmjs.com/package/gulp-sass)
- [_gulp-minify-css_](https://www.npmjs.com/package/gulp-minify-css)
- [_gulp-rename_](https://www.npmjs.com/package/gulp-rename)
- [_gulp-jade_](https://www.npmjs.com/package/gulp-jade)
- [_gulp-merge_](https://www.npmjs.com/package/gulp-merge)
- [_gulp-autoprefixer_](https://www.npmjs.com/package/gulp-autoprefixer)
- [_gulp-sourcemaps_](https://www.npmjs.com/package/gulp-sourcemaps)
- [_gulp-plumber_](https://www.npmjs.com/package/gulp-plumber)

[1]:http://sass-lang.com/
[2]:http://jade-lang.com/
[3]:http://gulpjs.com/
