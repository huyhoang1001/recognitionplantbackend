const jwt = require('../helpers/jwt.helper');
const config = require('../config');
const db = require('../db');
const { AuthService } = require('../services');

const loginGoogle = async (req, res) => {
  let formatData = {
    googleId: req.body.googleId,
    fullName: req.body.fullName,
    email: req.body.email,
    avatar: req.body.avatar,
  };

  let authService = new AuthService(db, formatData);

  let user = await authService.getInfoGoogle();
  if (!user) {
    user = await authService.createAccount();
  }

  let token = await jwt.generateToken(user, config.jwtSecret, config.tokenLife);

  return res.status(200).json({
    message: "login google success",
    result: {
      user: { _id: user.id, avatar: user.avatar, fullName: user.fullName },
      token: token
    }
  });
}

const loginFacebook = async (req, res) => {
  let formatData = {
    facebookId: req.body.facebookId,
    fullName: req.body.fullName,
    email: req.body.email,
    avatar: req.body.avatar,
  };

  let authService = new AuthService(db, formatData);

  let user = await authService.getInfoFacebook();
  if (!user) {
    user = await authService.createAccount();
  }

  let token = await jwt.generateToken(user, config.jwtSecret, config.tokenLife);

  return res.status(200).json({
    message: "login facebook success",
    result: {
      user: { _id: user.id, avatar: user.avatar, fullName: user.fullName },
      token: token
    }
  });
}

module.exports = {
  loginGoogle,
  loginFacebook
};
