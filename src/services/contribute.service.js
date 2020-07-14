class Contribute {
  constructor(db, data) {
    this.db = db;
    this.data = data;
  }

  async create() {
    const contribute = this.data;
    return await this.db.Contribute.create(contribute)
  }

  async getList() {
    const postId = this.data.postId;
    return await this.db.Contribute.find({ postContributed: postId })
      .populate('contributedBy', '_id fullName avatar email')
  }
}

module.exports = {
  Contribute
};
