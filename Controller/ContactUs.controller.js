let ContactUs = require('../Model/ContactUs.Model');


let ContactHandlerUs = async (req, res) => {
    try {
        let { name, email, message } = req.body;

        // Create and save contact message
        let contactMessage = new ContactUs({ name, email, message });
        await contactMessage.save();

        // Send confirmation message
        res.status(201).json({
            message: `${name}, our team will get back to you within 24 hrs.`,
            contactMessage
        });
    } catch (error) {
        res.status(500).json({ message: "Error submitting contact form", error });
    }
}

let getContactMessages = async (req, res) => {
    try {
        let contactMessages = await ContactUs.find();
        res.status(200).json(contactMessages);
    } catch (error) {
        res.status(500).json({ message: "Error fetching contact messages", error });
    }
}

module.exports ={
    ContactHandlerUs,
    getContactMessages
};