class User {
  constructor(db, data) {
    this.db = db;
    this.data = data;
  }

  async getInfo() {
    const _id = this.data._id;
    return await this.db.User.findById(_id);
  }

  async updateInfo() {
    return await this.db.User.create(this.data);
  }
}

module.exports = {
  User
};
