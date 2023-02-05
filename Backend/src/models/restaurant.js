const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  restaurant_name: {
    type: String,
    required: true,
    trim: true,
  },
  contact_name: {
    type: String,
    required: true,
    trim: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  website: {
    type: String,
    required: true,
    trim: true,
  },
  phone_number: {
    type: Number,
    required: true,
  },
  average_daily_transaction: {
    type: Number,
    required: true,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
