const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerTypeSchema = new Schema({
    customer_type: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
});

module.exports = CustomerTypeSchema = mongoose.model('customer_type', CustomerTypeSchema);
