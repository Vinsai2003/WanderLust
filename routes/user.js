const express = require('express');
const router = express.Router();
const User = require("../models/user.js");
const wrapasync = require('../utils/wrapasync.js');
const passport = require("passport");
const { saveRedirectUrl } = require("../routes/middleware.js");

const UserController = require("../controllers/users.js");
// const user = require('../models/user.js');


router.route("/signup")
    .get(UserController.renderSignUpForm)
    .post(wrapasync(UserController.signUp));

router.route("/login")
    .get(UserController.renderLoginForm)
    .post(
        saveRedirectUrl, // middleware
        passport.authenticate("local", { 
            failureRedirect: "/login", 
            failureFlash: true 
        }), 
        UserController.login
    );

//===============LOGOUT===========================
router.get("/logout",UserController.logout);

module.exports = router;