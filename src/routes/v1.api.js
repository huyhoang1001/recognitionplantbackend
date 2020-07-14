const auth_api_route = require("./v1/auth.api");
const post_api_route = require("./v1/post.api");
const plant_api_route = require("./v1/plant.api");
const user_api_route = require("./v1/user.api");
const contribute_api_route = require("./v1/contribute.api");

const express = require("express");
const v1_api_route = express.Router();

v1_api_route.use("/post", post_api_route);
v1_api_route.use("/auth", auth_api_route);
v1_api_route.use("/plant", plant_api_route);
v1_api_route.use("/user", user_api_route);
v1_api_route.use("/contribute", contribute_api_route);

module.exports = v1_api_route;
