const express = require('express');
const { controllerUser } = require('../../controllers');
const authMiddleware = require('../../middlewares/auth.middleware');

const user_api_route = express.Router();

user_api_route.route('/getInfo/:_id').get(authMiddleware.checkAuthor, authMiddleware.hasAuthorization, controllerUser.getInfo);
user_api_route.route('/updateInfo/:_id').put(authMiddleware.checkAuthor, authMiddleware.hasAuthorization, controllerUser.updateInfo);

user_api_route.param('_id', controllerUser.UserById);
module.exports = user_api_route;
