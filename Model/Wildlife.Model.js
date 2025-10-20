const mongoose = require('mongoose'); // ✅ Correct variable name

const wildlifeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    habitat: {
        type: String,
        required: true
    },
    population: {
        type: Number,
        required: true
    },
    conservationStatus: {
        type: String,
        required: true
    }
}, { timestamps: true }); // ✅ Optional: Adds createdAt & updatedAt

const Wildlife = mongoose.model('Wildlife', wildlifeSchema);
module.exports = Wildlife;
