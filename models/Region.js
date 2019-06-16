const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegionSchema = new Schema({
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
    is_active: {
        type: Boolean,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Region = mongoose.model('region', RegionSchema);
