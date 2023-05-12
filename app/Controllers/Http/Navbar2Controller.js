'use strict'

class Navbar2Controller {

    index({ view, auth }) {
        const user = auth.user.toJSON()
        return view.render('page/beranda', { user: user })
    }
}

module.exports = Navbar2Controller
