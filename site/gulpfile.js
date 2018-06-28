/****TODO****
 * mnificar .css
 * minify .css
 **/

//initializing scripts
//notify is disabled by default
var gulp					= require('gulp'),
	sass					= require('gulp-ruby-sass'),
	minify				= require('gulp-clean-css'),
	autoprefixer	= require('gulp-autoprefixer'),
	pug						= require('gulp-pug'),
	del						= require('del'),
	//notify				= require('gulp-notify'),
	browserSync		= require('browser-sync').create();

/**
* pt-br
* Tarefas do gulp:
* - sass: compila e minifica .sass em .css e atualiza o navegador
* - img: copia as imagens da pasta _assets pra _site e atualiza o navegador
* - pug: compila .pug em .html e atualiza o navegador
* - del: limpa arquivos desnecessários em _site
* - watch: observa arquivos alterados e roda as tasks necesárias
* - default: tarefa padrão, é executada quando se roda `$ gulp`
**
**
* Tarefa pra compilar .sass em .css, tem uma saída .css pra debug e uma
* .min.css pra upload no servidor
*
* en
* Gulp tasks
* - sass: compile and minify css, calls browserSync
* - img: copy _assets/img to _site/ folder, calls browserSync
* - ico: copy _assets/ico to _site/ folder, calls browserSync
* - pug: compile .pug to .html, calss browserSync
* - del: _site folder cleanup
* - watch: watch for altered files
* - default: calls evereything when you execute `$ gulp`
**/

gulp.task('stylesheet', function () {
	return sass('_assets/css/main.sass', {style: 'expanded'})
	.pipe(autoprefixer('last 2 versions'))
.pipe(gulp.dest('_assets/css')) //saída para depuração
	//.pipe(notify({ message: 'Css compilado'}))
	.pipe(minify({compatibility: 'ie8'}))
	.pipe(gulp.dest('_site/_assets/css')) //saída minificada
	//.pipe(notify({ message: 'Css minificado'}))
	.pipe(browserSync.stream());
});

/**
* Tarefa que copia imagens de _assets/img pra _site
**/
gulp.task('img', function () {
	return gulp.src('_assets/img/*')
	.pipe(gulp.dest('_site/_assets/img'))
	//.pipe(notify( {message: 'Imagens copiadas'}))
	.pipe(browserSync.stream());
});

/**
* Tarefa que copia imagens de _assets/img pra _site
**/
gulp.task('ico', function () {
	return gulp.src('_assets/ico/*')
	.pipe(gulp.dest('_site/_assets/ico'))
	//.pipe(notify( {message: 'Imagens copiadas'}))
	.pipe(browserSync.stream());
});

/**
* Tarefa para limpar arquivos obsoletos na pasta _site
**/
gulp.task('del', function () {
	return del(['_site/assets/css', '_site/assets/img', '_site/*.html', '_site/**/*.html']);
});

/**
* Tarefa para compilar os arquivos .pug em .html
**/
gulp.task('pug', function () {
	return gulp.src('_pug/**/*.pug')
	.pipe(pug())
	.pipe(gulp.dest('_site'))
	//.pipe(notify( {message: 'pug compilado'}))
	.pipe(browserSync.stream());
});

/**
* Observa alterações nas fontes e atualiza o navegador
**/
gulp.task('watch', function () {
	browserSync.init({
		server: "./_site"
	});

	gulp.watch('_assets/css/**', ['stylesheet']); //sass
	gulp.watch('_pug/**', ['pug']); //pug
	gulp.watch('_assets/img/*.png', ['img']); //imagens
});

/**
* Tarefa padrão, executa a task `del`, compila o site e inicia a task watch
**/
gulp.task('default', ['del'], function () {
	gulp.start(['stylesheet', 'pug','img','ico', 'watch']);
});
