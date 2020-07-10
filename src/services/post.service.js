class Post {
  constructor(db, data) {
    this.db = db;
    this.data = data;
  }

  async create() {
    const post = this.data;
    return await this.db.Post.create(post)
  }

  async getList() {
    const lastId = this.data.lastId;
    const list_post = await this.db.Post
      .find({
        $and: [
          {
            _id: {
              $gt: lastId,
            }
          }
        ]
      })
      .limit(10)
      .sort({ _id: 1, 'created': -1 })
      .populate('postedBy', '_id fullName avatar email')
      .populate('mentionedPlant', '_id nameVN')
    return list_post
  }

  async getListPostUser() {
    const userId = this.data.userId;
    const lastId = this.data.lastId;

    const list_post = await this.db.Post
      .find({
        postedBy: userId ,
        $and: [
          {
            _id: {
              $gt: lastId,
            }
          }
        ]
      })
      .limit(10)
      .sort({ 'created': -1 })
      .populate('postedBy', '_id fullName avatar email')
      .populate('mentionedPlant', '_id nameVN')

    return list_post
  }

  async getInfoPost() {
    const postId = this.data.postId;
    return await this.db.Post.findById(postId)
      .populate('postedBy', '_id fullName avatar email')
      .populate('mentionedPlant', '_id nameVN')
  }
}

module.exports = {
  Post
};
