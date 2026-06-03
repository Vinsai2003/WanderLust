const User = require("../models/user");

module.exports.renderSignUpForm = (req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.signUp =async(req,res)=>{
    try{
    let {email,username,password} = req.body;
    const newUser = new User({
        email,
        username
    });
    const registeredUser = await User.register(newUser,password);   
    console.log(registeredUser);   
    req.login(registeredUser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Welcome to Wanderlust!");
        res.redirect("/listings");
    });          
    } catch(e){
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs");
};

module.exports.login = (req, res) => {
        req.flash("success", "Welcome back!");
        // Use the saved URL or default to "/listings" if it's undefined
        let redirectUrl = res.locals.redirectUrl || "/listings"; 
        res.redirect(redirectUrl);
};

module.exports.logout = (req,res,next)=>{ 
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you have been logged out!");
        res.redirect("/listings");
    });
};