const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BUSchema = new Schema({
    bu_id: {
        type: String,
        required: true
    },
    bu_name: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
});

module.exports = BU = mongoose.model('bu', BUSchema);
