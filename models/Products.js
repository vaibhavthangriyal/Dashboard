const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
    sku_id: {
        type: String,
        required: true
    },
    distirbutor: {
        type: String,
        required: true
    },
    therapy_line: {
        type: String,
        required: true
    },
    range: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    strength: {
        type: String,
        required: true
    },
    pack_size: {
        type: String,
        required: true
    },
    cif_price: {
        type: String,
        required: true
    },
    whole_price: {
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
    is_permoted: {
        type: Boolean,
        required: true
    },
    is_registered: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Product = mongoose.model('product', ProductSchema);
