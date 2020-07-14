const UserService = require('./user.service').User;
const AuthService = require('./auth.service').Auth;
const PostService = require('./post.service').Post;
const PlantService = require('./plant.service').Plant;
const ContributeService = require('./contribute.service').Contribute;

module.exports = {
    UserService,
    AuthService,
    PostService,
    PlantService,
    ContributeService
}
