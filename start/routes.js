'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.on('/').render('page/beranda')
Route.on('/home').render('page/beranda2')
Route.on('/aboutus').render('page/aboutus')
Route.on('/contact').render('page/contact')
Route.on('/register').render('auth/register')
Route.on('/login').render('auth/login')

Route.get('beranda', 'BerandaController.index'). as('beranda')

Route.get('register', 'Auth/RegisterController.index').as('register.index')
Route.post('register', 'Auth/RegisterController.store').as('register.store')

Route.get('login', 'Auth/LoginController.index').as('login.index')
Route.post('login', 'Auth/LoginController.check').as('login.check')
Route.get('logout', 'Auth/LoginController.logout').as('logout')

Route.get('/posts', 'RegistrationController.index').as('posts.index')
Route.get('/posts/create', 'RegistrationController.create').as('posts.create')
Route.post('/posts/store', 'RegistrationController.store').as('posts.store')

// Route.get('/login', 'RegisterController.index')
// Route.get('/login/:id', 'RegisterController.show')
// Route.post('/login', 'RegisterController.store')
// Route.put('/login/:id', 'UserController.update')
// Route.delete('/login', 'RegisterController.delete')