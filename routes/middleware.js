const Listing = require("../models/listing");
const Review = require("../models/review.js");
const { listingSchema,reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");

module.exports.isloggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","you must be logged in to access this page");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
        delete req.session.redirectUrl;   
    }
    next();
};


module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing does not exist!");
        return res.redirect("/listings");
    }

    if (!res.locals.currentUser) {
        req.flash("error", "You must be logged in!");
        return res.redirect("/login");
    }

    if (!listing.owner.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }

    next();
};  

module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);             
    if (error) {
        const msg = error.details.map(el => el.message).join(",");    
        throw new ExpressError(400, msg);
    }       
    else {
        next();
    }   
};

module.exports.validateReview = (req,res,next)=>{
    let {error} =reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};

module.exports.isReviewAuthor = async (req, res, next) => {
    let {id ,reviewId } = req.params;
    const review = await Review.findById(reviewId);

    if (!review) {
        req.flash("error", "Review does not exist!");
        return res.redirect("/listings");
    }

    if (!res.locals.currentUser) {
        req.flash("error", "You must be logged in!");
        return res.redirect("/login");
    }

    if (!review.author.equals(res.locals.currentUser._id)) {
        req.flash("error", "You are not the Author of this review");
        return res.redirect(`/listings/${id}`);
    }

    next();
};  