const mongoose = require('mongoose');
const programSchema = new mongoose.Schema({
    programName: {
        type: String,
        required: true
    },
    countryOrRegion: {
        type: String,
        required: true
    },
    governmentAgency: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    objectivesAndGoals: {
        type: String,
        required: true
    },
    yearLaunched: {
        type: Number,
        required: true
    },
    currentStatus: {
        type: String,
        required: true
    },
    fundingUSD: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    targetSpeciesOrEcosystems: {
        type: String,
        required: true
    }
});

const Program = mongoose.model('Program', programSchema);
module.exports = Program;