const mongoose = require("mongoose");

let contactUsSchema = new mongoose.Schema({
  userLastName: {
    type: String,
    requried: true,
    //TODO --> validator
  },
  userFirstName: {
    type: String,
    required: true,
  },

  // un-comment this if you want the admin to be use in the same website
  //   userAdmin: {
  //     type: Boolean,
  //   },

  userCreatedAt: {
    type: Date,
    required: true,
  },

  userMessage: {
    type: String,
    required: true,
  },

  userLocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userLocation",
    required: false,
    default: null,
  },
});

module.exports = mongoose.model("User", contactUsSchema);
