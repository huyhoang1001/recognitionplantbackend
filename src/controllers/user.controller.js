const { UserService } = require('../services');
const db = require('../db');
const _ = require('lodash');

const getInfo = async (req, res) => {
    const formatData = {
        _id: req.params._id
    }

    const userService = new UserService(db, formatData);

    let user = await userService.getInfo();
    if (!user) {
        return res.status(204)
            .json({
                message: "User dont exist",
            })
    }

    return res.status(200)
        .json({
            message: "Get info user success",
            result: {
                user: {
                    email: user.email,
                    fullName: user.fullName,
                    birthday: user.birthday,
                    gender: user.gender,
                    address: user.address,
                    avatar: user.avatar,
                }
            }
        })
}

const updateInfo = async (req, res) => {
    const formatData = {
        _id: req.params._id,
        fullName: req.body.fullName,
        email: req.body.email,
        birthday: req.body.birthday,
        gender: req.body.gender,
        address: req.body.address
    }

    let userInfo = req.profile;
    userInfo = _.extend(userInfo, formatData);
    userInfo.updated = Date.now();

    const userService = new UserService(db, userInfo);

    let user = await userService.updateInfo();

    if (!user) {
        return res.status(204)
            .json({
                message: "User dont exist",
            })
    }

    return res.status(200)
        .json({
            message: "update success",
            result: {
                user: {
                    email: user.email,
                    fullName: user.fullName,
                    birthday: user.birthday,
                    gender: user.gender,
                    address: user.address,
                    avatar: user.avatar,
                }
            }
        })
}

const UserById = async (req, res, next, _id) => {
    if (_id === 'null') {
        next();
    }

    const formatData = {
        _id: _id
    }

    const userService = new UserService(db, formatData);

    let user = await userService.getInfo();

    if (!user) {
        return res.status('404').json({
            message: 'User not found'
        });
    }
    req.profile = user;
    next();
}

module.exports = {
    getInfo,
    updateInfo,
    UserById
};
