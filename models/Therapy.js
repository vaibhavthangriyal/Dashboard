const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TherapySchema = new Schema({
    therapyline: {
        type: String,
        required: true
    },
    therapyline_id: {
        type: String,
        required: true
    },
    bu_id: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
});

module.exports = Therapy = mongoose.model('therapy', TherapySchema);
