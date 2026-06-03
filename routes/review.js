const express = require('express');
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapasync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require ("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isloggedIn, isReviewAuthor } = require("./middleware.js");

const reviewController = require("../controllers/reviews.js");

//reviews Route 

//==========post review route============
router.post("/", isloggedIn,validateReview, wrapAsync(reviewController.CreateReview));


//===========delete review route=========== 
router.delete("/:reviewId", isloggedIn, isReviewAuthor, wrapAsync(reviewController.DestroyReview));

router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});
module.exports = router;