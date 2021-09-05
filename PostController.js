import PostService from "./PostService.js";

class PostController {
  async create(req, res) {
    try {
      console.log("req.files", req.files);
      // const { author, title, content, picture } = req.body;
      // const post = await Post.create({ author, title, content, picture });
      // res.json(post);
      const post = await PostService.create(req.body, req.files.img);

      res.json(post);
    } catch (e) {
      res.status(500).json(e.message || e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();

      res.json(posts);
    } catch (e) {
      res.status(500).json(e.message || e);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const post = await PostService.getOne(id);

      res.json(post);
    } catch (e) {
      res.status(500).json(e.message || e);
    }
  }

  async update(req, res) {
    try {
      const post = req.body;
      const updatedPost = await PostService.update(post);

      res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e.message || e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const post = await PostService.delete(id);

      res.json(post);
    } catch (e) {
      res.status(500).json(e.message || e);
    }
  }
}

export default new PostController();
