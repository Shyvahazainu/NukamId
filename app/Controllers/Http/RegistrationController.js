'use strict'

const Post = use('App/Models/Registration')
class RegistrationController {
    async index({ request, response, view}){
        const posts= await Post.all()

        return view.render('posts.index', {posts:posts.rows})
    }

    create({request, response, view}){
        return view.render('posts.create')
    }

    async store({request, response, view, session}){
        const post=new Post()

        post.username = request.input('username')
        post.email = request.input('email')
        await post.save()

        session.flash({ notification:'Data tersimpan'})
        return response.route('posts.index')
    }

}

module.exports = RegistrationController
