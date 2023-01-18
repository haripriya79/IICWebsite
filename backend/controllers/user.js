const Events = require("../models/events");
const images = require("../models/images");
const team = require("../models/team");
const User = require("../models/user");


exports.updatePasswordById = (req, res, next, id) => {
    //console.log("profile");
    //console.log(req.body);
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "No user was found in DB"
            });
        }
        user.updatePassword(req.body.password);
        req.profile = user;
        next();
    });
};
exports.getUserById = (req, res, next, id) => {
    //console.log(req.body);
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "No user was found in DB"
            });
        }

        req.profile = user;
        next();
    });
};

exports.getUser = (req, res) => {
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;
    return res.json(req.profile);
};


exports.updateUserPassword = (req, res) => {
    //console.log("profile");
    //console.log(req.body);
    //var password = User.updatePassword(req.body.password);
    //console.log(password);
    User.findByIdAndUpdate({ _id: req.profile._id }, { $set: { encry_password: req.profile.encry_password } }, { new: true, useFindAndModify: false },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: "You are not authorized to update this user"
                });
            }
            user.salt = undefined;
            user.encry_password = undefined;
            res.json(user);
        }
    );
};
exports.updateUser = (req, res) => {
    User.findByIdAndUpdate({ _id: req.profile._id }, { $set: req.body }, { new: true, useFindAndModify: false },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: "You are not authorized to update this user"
                });
            }
            user.salt = undefined;
            user.encry_password = undefined;
            res.json(user);
        }
    );
};

exports.getOverview = async(req, res) => {
    let overview = {
        Events: 0,
        Team: 0,
        Gallery: 0,
        Articles: 0
    }

    overview.Events = await Events.countDocuments();
    overview.Team = await team.countDocuments();
    overview.Gallery = await images.countDocuments({ type: "Gallery" });
    overview.Articles = await images.countDocuments({ type: "Articles" });
    res.json(overview);

}