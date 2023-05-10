'use strict'

class BerandaController {

    index({ view, auth }) {
        const user = auth.user.toJSON()
        return view.render('page/beranda', { user: user })
    }

}

module.exports = BerandaController
