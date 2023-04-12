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


Route.on('/h').render('page/beranda')
Route.on('/aboutus').render('page/aboutus')
Route.on('/contact').render('page/contact')
Route.on('/login').render('page/login')

Route.get('/api/posts', 'PostController.index')
Route.get('/api/posts/:id', 'PostController.show')
Route.post('/api/posts', 'PostController.store')
Route.put('/api/posts/:id', 'PostController.update')
Route.delete('/api/posts/:id', 'PostController.destroy')
