const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DistrictSchema = new Schema({
    company_name: {
        type: String,
        required: true
    },
    country_name: {
        type: String,
        required: true
    },
    region_name: {
        type: String,
        required: true,
    },
    city_name: {
        type: String,
        required: true,
    },
    district_name: {
        type: String,
        required: true,
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

module.exports = District = mongoose.model('district', DistrictSchema);
