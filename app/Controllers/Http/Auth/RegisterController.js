'use strict'

const User = use('App/Models/User')
const Register = use('App/Models/Registers')
const { validate } = use('Validator')

class RegisterController {

  index({ view }) {
    return view.render('auth.register')
  }

  async store({ request, session, response }) {

    const rules = {
      name: 'required',
      email: 'required|unique:users,email',
      password: 'required'
    }
    const register=new Register()

     register.name = request.input('name')
     register.email = request.input('email')
     register.password = request.input('password')
     await register.save()

     session.flash({ notification: 'Register Berhasil!' })
    return response.redirect('/login')

  }

}

module.exports = RegisterController