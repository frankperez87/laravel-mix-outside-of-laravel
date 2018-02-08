let mix = require('laravel-mix');

mix.js('src/app.js', 'dist/js')
    .stylus('src/app.styl', 'dist/css');

mix.browserSync(process.env.MIX_DOMAIN);