let mongoosh = require('mongoose');
const contactUsSchema = new mongoosh.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensures no duplicate emails
    },
    message: {
        type: String,
        required: true
    }
    // date: {
    //     type: Date,
    //     default: Date.now // Automatically sets the date when the document is created
    // }
});

let ContactUs = mongoosh.model('ContactUs', contactUsSchema);
module.exports = ContactUs;