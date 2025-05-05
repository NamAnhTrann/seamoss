const mongoose = require("mongoose");

let userSchenma = new mongoose.Schema({
  userLastName: {
    type: String,
    requried: true,
    //TODO --> validator
  },
  userFirstName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
    //TODO --> validator
  },

  userPassword: {
    type: String,
    required: true,
  },
  userPhoneNumber: {
    type: Number,
    required: false,
  },

  // un-comment this if you want the admin to be use in the same website
  //   userAdmin: {
  //     type: Boolean,
  //   },

  userCreatedAt: {
    type: Date,
    required: true,
  },

  userLocation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userLocation",
    required: false,
    default: null,
  },
});

module.exports = mongoose.model("User", userSchenma);
