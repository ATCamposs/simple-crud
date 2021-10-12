import { HttpContext } from "@adonisjs/http-server/build/standalone"
import Post from "App/Models/Post"

export default class PostsController {
  public async index () {
    return await Post.all()
  }

  public async show ({ params }: HttpContext) {
    return await Post.find(params.id)
  }

  public async store ({ request }: HttpContext) {
    const data = request.only(['title', 'content'])
    const post = {
      title: data.title,
      content: data.content,
    }
    return await Post.create(post)
  }

  public async destroy ({ params }: HttpContext) {
    const post = await Post.find(params.id)
    post?.delete()
  }
}
