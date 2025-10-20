const mongoose = require('mongoose');
const joinTeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensures no duplicate emails
    },
    interest: {
        type: String,
        required: true
    }

});
const JoinTeam = mongoose.model('JoinTeam', joinTeamSchema);
module.exports = JoinTeam;