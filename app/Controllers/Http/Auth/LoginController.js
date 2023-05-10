'use strict'

class LoginController {
    index({view}){
        return view.render('auth.login')
    }

    async check({request, auth, response}){
        const{email, password} = request.all()

        await auth.attempt(email, password)

        return response.redirect('/aboutus')
    }

    async logout({auth, response}){
        await auth.logout()
        return response.route('login.index')
    }
    
}

module.exports = LoginController
