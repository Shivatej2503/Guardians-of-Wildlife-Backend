let express = require('express');
let ContactUsrouter = express.Router();
let { ContactHandlerUs, getContactMessages } = require('../Controller/ContactUs.controller');

/**
 * @swagger
 * tags:
 *   name: ContactUs
 *   description: API endpoints for Contact Us functionality
 */

/**
 * @swagger
 * /contactus/submit:
 *   post:
 *     summary: Submit a contact us message
 *     tags: [ContactUs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the sender
 *               email:
 *                 type: string
 *                 description: Email of the sender
 *               message:
 *                 type: string
 *                 description: Message content
 *     responses:
 *       200:
 *         description: Message submitted successfully
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /contactus/show:
 *   get:
 *     summary: Retrieve all contact us messages
 *     tags: [ContactUs]
 *     responses:
 *       200:
 *         description: A list of contact us messages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Message ID
 *                   name:
 *                     type: string
 *                     description: Name of the sender
 *                   email:
 *                     type: string
 *                     description: Email of the sender
 *                   message:
 *                     type: string
 *                     description: Message content
 *       500:
 *         description: Server error
 */

ContactUsrouter.post('/submit', ContactHandlerUs); // POST http://localhost:8000/contactus/submit
ContactUsrouter.get('/show', getContactMessages);  // GET http://localhost:8000/contactus/show

module.exports = ContactUsrouter;
