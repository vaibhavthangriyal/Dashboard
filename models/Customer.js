const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CustomerSchema = new Schema({
    cutomer_name: {
        type: String,
        required: true
    },
    distirbutor: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    sector: {
        type: String,
        required: true
    },
    region_name: {
        type: String,
        required: true
    },
    city_name: {
        type: String,
        required: true
    },
    district_name: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
});

module.exports = Customer = mongoose.model('customer', CustomerSchema);
