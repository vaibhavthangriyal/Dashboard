const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CompanySchema = new Schema({
    company_name: {
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

module.exports = Company = mongoose.model('company', CompanySchema);
