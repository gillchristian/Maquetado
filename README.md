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
```$ gulp sass``` compiles scss files in ```toCompile/sass``` directory to ```css``` directory.

```$ gulp jade``` compiles jade files in ```toCompile/jade``` directory to ```html``` directory, ```toCompile/index.jade``` compiles to the root directory.

```$ gulp watch``` watches ```sass``` and ```jade``` tasks.

default task ```gulp``` runs ```watch```.

[1]:http://sass-lang.com/
[2]:http://jade-lang.com/
[3]:http://gulpjs.com/
