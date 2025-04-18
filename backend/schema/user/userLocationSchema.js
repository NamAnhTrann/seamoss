const mongoose = require("mongoose");

const userLocation = new mongoose.Schema({
  // TODO --> Validator and hooks
  userLocationStreet: {
    type: String,
    required: false,
  },

  userLocationState: {
    type: String,
    required: false,
  },

  userLocationCity: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Location", userLocation);
