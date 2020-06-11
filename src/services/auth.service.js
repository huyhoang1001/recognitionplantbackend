class Auth {
  constructor(db, data) {
    this.db = db;
    this.data = data;
  }
  
  async getInfoGoogle() {
    return await this.db.User.findOne({ "google.googleId": this.data.googleId });
  }

  async getInfoFacebook() {
    return await this.db.User.findOne({ "facebook.facebookId": this.data.facebookId });
  }

  getAccount() {
    let user={
      fullName: this.data.fullName,
      avatar: this.data.avatar,
      birthday: this.data.birthday,
      email: this.data.email
    }

    if(this.data.googleId){
      user.google={
        googleId: this.data.googleId
      }
    }
    else{
      user.facebook={
        facebookId: this.data.facebookId
      }
    }

    return user;
  }

  async createAccount() {
    const user = this.getAccount();
    return await this.db.User.create(user);
  }
}

module.exports = {
  Auth
};
