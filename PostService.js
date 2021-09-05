import Post from "./Post.js";
import FileService from "./FileService.js";

class PostService {
  async create(post, img) {
    const fileName = FileService.saveFile(img);
    const createdPost = await Post.create({ ...post, picture: fileName });
    return createdPost;
  }

  async getAll() {
    const posts = await Post.find();
    return posts;
  }

  async getOne(id) {
    if (!id) throw new Error("Id is missing!!!");

    const post = await Post.findById(id);
    return post;
  }

  async update(post) {
    if (!post._id) throw new Error("Id is missing!!!");

    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }

  async delete(id) {
    if (!id) throw new Error("Id missing!!!");

    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
