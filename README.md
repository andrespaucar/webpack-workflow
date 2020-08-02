<<<<<<< HEAD
<link href="https://raw.githubusercontent.com/YoelPaucar/webpack-workflow/master/dist/css/main.ca314abe86a9a3415ac5.css" rel="stylesheet">


=======
>>>>>>> 7a28a15e17e2c23916d20a4781dd3baa79a81d63

## GET STARTED

    npm install

## DEV

    npm run start

## PROD

    npm run build

### FLEX
~~~
<div class="flex flex-wrap p-4 text-white ">
    <div class="w-1-3 bg-primary text-center">w-1-3</div>
    <div class="w-1-3 bg-success text-center">w-1-3</div>
    <div class="w-1-3 bg-danger text-center">w-1-3</div>
</div>
<div class="flex p-4 text-white">
    <div class="w-2-3 bg-danger text-center">w-3-2</div>
    <div class="w-1-3 bg-warning text-center">w-1-3</div>

</div>
~~~
### GRID
~~~
<div class="grid grid-cols-2 gap-4 p-4 rounded shadow-lg m-4 border border-dark bg-white">
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" class="form-control" placeholder="Andres">
    </div>
    <div class="form-group">
        <label for="surname">Surname</label>
        <input type="text" name="surname" id="surname" class="form-control" placeholder="Paucar">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="text" name="password" id="password" class="form-control">
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="text" name="email" id="email" class="form-control">
    </div>
    <div class="form-group">
        <label for="city">City</label>
        <input type="text" name="city" id="city" class="form-control">
    </div>
    <div class="form-group">
        <label for="state">State</label>
        <input type="text" name="state" id="state" class="form-control">
    </div>
</div>
~~~

## INCLUDED STYLES
    
    src
    └──styles
        ├─── base
              └── _reset.scss
        ├─── components
        |        ├── _alert.scss
        |        ├── _badge.scss
        |        ├── _buttons.scss
        |        ├── _form.scss
        |        ├── _tooltip.scss
        ├─── layout
        |        ├── _flex.scss
        |        ├── _grid.scss
        ├── _variable.scss 
        ├── main.scss 

<hr/>

## WEBPACK-CONFIG

WEBPACK - WEBPACK SERVER - HTML

    npm i webpack webpack-cli webpack-dev-server html-webpack-plugin clean-webpack-plugin -D

IMAGENES

    npm i image-webpack-loader -D

PARA HACER COMPATIBLE EL CSS CON TODOS LOS NAVEGADORES

    npm i autoprefixer postcss-loader -D

PARA CARGAR ARCHIVOS .SVG, FUENTES

    npm i file-loader -D

COMPILADORES CSS Y SASS

    npm i css-loader mini-css-extract-plugin sass-loader node-sass -D

TEMPALTE

    npm i handlebars handlebars-loader -D


 

 
