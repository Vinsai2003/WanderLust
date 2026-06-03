const Listing = require("../models/listing");


// ================= INDEX ROUTE =================
module.exports.index =async (req, res) => {
    let filter = {};
    if (req.query.category) {
        filter.category = req.query.category;
    }
    const allListings = await Listing.find(filter);
    res.render("../views/listings/index.ejs", { allListings });
};

// ================= NEW ROUTE =================
module.exports.renderNewForm = (req, res) => {
    res.render("../views/listings/new.ejs");
};

// ================= SHOW ROUTE =================
module.exports.showListing = async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }
    res.render("../views/listings/show.ejs", { listing });
};

// ================= CREATE ROUTE =================
module.exports.createListing = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;   // ✅ Correct owner field
    newListing.image = { url, filename };

    // Parse coordinates from form (they come as strings from hidden inputs)
    let lng = 0;
    let lat = 0;
    if (
        req.body.listing.geometry &&
        req.body.listing.geometry.coordinates &&
        req.body.listing.geometry.coordinates[0] &&
        req.body.listing.geometry.coordinates[1]
    ) {
        lng = Number(req.body.listing.geometry.coordinates[0]);
        lat = Number(req.body.listing.geometry.coordinates[1]);
    }

    if (isNaN(lng)) lng = 0;
    if (isNaN(lat)) lat = 0;

    newListing.geometry = {
        type: "Point",
        coordinates: [lng, lat] // [longitude, latitude]
    };
    await newListing.save();
    req.flash("success", "New listing created successfully");
    res.redirect("/listings");
};

// ================= EDIT ROUTE =================
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing does not exist");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url; // ✅ Ensure image field is a URL string for the edit form
    originalImageUrl = originalImageUrl.replace("/upload/", "/upload/w_250/"); // ✅ Adjust path if necessary
    res.render("../views/listings/edit.ejs", { listing , originalImageUrl});
};

// ================= UPDATE ROUTE =================
module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    // Parse updated coordinates from form (they come as strings from hidden inputs)
    if (
        req.body.listing.geometry &&
        req.body.listing.geometry.coordinates &&
        req.body.listing.geometry.coordinates[0] &&
        req.body.listing.geometry.coordinates[1]
    ) {
        let lng = Number(req.body.listing.geometry.coordinates[0]);
        let lat = Number(req.body.listing.geometry.coordinates[1]);
        if (isNaN(lng)) lng = 0;
        if (isNaN(lat)) lat = 0;

        listing.geometry = {
            type: "Point",
            coordinates: [lng, lat]
        };
        await listing.save();
    }

    if ( typeof req.file !== "undefined" ) {  
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename }; // ✅ Update image field as an object
        await listing.save();
    }
    req.flash("success", "Listing updated successfully");
    res.redirect(`/listings/${id}`);
};

// ================= DELETE ROUTE =================
module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted successfully");
    res.redirect("/listings");
};