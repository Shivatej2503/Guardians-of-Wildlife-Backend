let express = require('express');
const WildlifeRouter = express.Router();
let { addAnimal, getAnimalById, getAnimals, updateAnimal, deleteAnimal } = require('../Controller/Wildlife.controller');

/**
 * @swagger
 * tags:
 *   name: Wildlife
 *   description: API endpoints for managing wildlife animals
 */

/**
 * @swagger
 * /wildlife/add:
 *   post:
 *     summary: Add a new animal to the wildlife database
 *     tags: [Wildlife]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - species
 *               - habitat
 *             properties:
 *               name:
 *                 type: string
 *                 example: Lion
 *               species:
 *                 type: string
 *                 example: Panthera leo
 *               habitat:
 *                 type: string
 *                 example: Savanna
 *     responses:
 *       201:
 *         description: Animal added successfully
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /wildlife/show:
 *   get:
 *     summary: Retrieve all animals from the wildlife database
 *     tags: [Wildlife]
 *     responses:
 *       200:
 *         description: A list of animals
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: 60d0fe4f5311236168a109ca
 *                   name:
 *                     type: string
 *                     example: Lion
 *                   species:
 *                     type: string
 *                     example: Panthera leo
 *                   habitat:
 *                     type: string
 *                     example: Savanna
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /wildlife/{id}:
 *   get:
 *     summary: Retrieve an animal by its ID
 *     tags: [Wildlife]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 60d0fe4f5311236168a109ca
 *     responses:
 *       200:
 *         description: Animal details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: 60d0fe4f5311236168a109ca
 *                 name:
 *                   type: string
 *                   example: Lion
 *                 species:
 *                   type: string
 *                   example: Panthera leo
 *                 habitat:
 *                   type: string
 *                   example: Savanna
 *       404:
 *         description: Animal not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /wildlife/{id}:
 *   put:
 *     summary: Update an animal's information by its ID
 *     tags: [Wildlife]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 60d0fe4f5311236168a109ca
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Lion
 *               species:
 *                 type: string
 *                 example: Panthera leo
 *               habitat:
 *                 type: string
 *                 example: Savanna
 *     responses:
 *       200:
 *         description: Animal updated successfully
 *       400:
 *         description: Invalid request data
 *       404:
 *         description: Animal not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /wildlife/{id}:
 *   delete:
 *     summary: Delete an animal by its ID
 *     tags: [Wildlife]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 60d0fe4f5311236168a109ca
 *     responses:
 *       200:
 *         description: Animal deleted successfully
 *       404:
 *         description: Animal not found
 *       500:
 *         description: Server error
 */

WildlifeRouter.post('/add', addAnimal);
WildlifeRouter.get('/show', getAnimals);
WildlifeRouter.get('/:id', getAnimalById);
WildlifeRouter.put('/:id', updateAnimal);
WildlifeRouter.delete('/:id', deleteAnimal);

module.exports = WildlifeRouter;