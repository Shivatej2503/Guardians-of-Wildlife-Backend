let express = require('express');
let ProgramRouter = express.Router();
let {
  createProgram,
  getPrograms,
  getProgramById,
  updateProgram,
  deleteProgram,
} = require('../Controller/Program.controller');

/**
 * @swagger
 * tags:
 *   name: Programs
 *   description: API endpoints for managing conservation programs
 */

/**
 * @swagger
 * /programs/add:
 *   post:
 *     summary: Create a new conservation program
 *     tags: [Programs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - programName
 *               - countryOrRegion
 *               - governmentAgency
 *               - description
 *               - objectivesAndGoals
 *               - yearLaunched
 *               - currentStatus
 *               - fundingUSD
 *               - duration
 *               - targetSpeciesOrEcosystems
 *             properties:
 *               programName:
 *                 type: string
 *                 example: Save Wildlife Program
 *               countryOrRegion:
 *                 type: string
 *                 example: India
 *               governmentAgency:
 *                 type: string
 *                 example: Ministry of Environment
 *               description:
 *                 type: string
 *                 example: A program focused on wildlife conservation.
 *               objectivesAndGoals:
 *                 type: string
 *                 example: To protect endangered species and their habitats.
 *               yearLaunched:
 *                 type: number
 *                 example: 2015
 *               currentStatus:
 *                 type: string
 *                 example: Active
 *               fundingUSD:
 *                 type: number
 *                 example: 5000000
 *               duration:
 *                 type: string
 *                 example: 10 years
 *               targetSpeciesOrEcosystems:
 *                 type: string
 *                 example: Tigers and Elephants
 *     responses:
 *       201:
 *         description: Conservation program created successfully
 *       400:
 *         description: Invalid request data
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /programs/show:
 *   get:
 *     summary: Retrieve all conservation programs
 *     tags: [Programs]
 *     responses:
 *       200:
 *         description: A list of conservation programs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Program'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /programs/show/{id}:
 *   get:
 *     summary: Retrieve a conservation program by ID
 *     tags: [Programs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 68962a77e0fbe05503f2276c
 *         description: The program ID
 *     responses:
 *       200:
 *         description: Conservation program details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Program'
 *       400:
 *         description: Invalid program ID
 *       404:
 *         description: Program not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /programs/update/{id}:
 *   put:
 *     summary: Update a conservation program by ID
 *     tags: [Programs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 68962a77e0fbe05503f2276c
 *         description: The program ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               programName:
 *                 type: string
 *                 example: Updated Program Name
 *               countryOrRegion:
 *                 type: string
 *                 example: Updated Country
 *               governmentAgency:
 *                 type: string
 *                 example: Updated Agency
 *               description:
 *                 type: string
 *                 example: Updated description.
 *               objectivesAndGoals:
 *                 type: string
 *                 example: Updated objectives and goals.
 *               yearLaunched:
 *                 type: number
 *                 example: 2016
 *               currentStatus:
 *                 type: string
 *                 example: Inactive
 *               fundingUSD:
 *                 type: number
 *                 example: 6000000
 *               duration:
 *                 type: string
 *                 example: 12 years
 *               targetSpeciesOrEcosystems:
 *                 type: string
 *                 example: Updated species
 *     responses:
 *       200:
 *         description: Conservation program updated successfully
 *       400:
 *         description: Invalid request data
 *       404:
 *         description: Program not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /programs/delete/{id}:
 *   delete:
 *     summary: Delete a conservation program by ID
 *     tags: [Programs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 68962a77e0fbe05503f2276c
 *         description: The program ID
 *     responses:
 *       200:
 *         description: Conservation program deleted successfully
 *       400:
 *         description: Invalid program ID
 *       404:
 *         description: Program not found
 *       500:
 *         description: Server error
 */

ProgramRouter.post('/add', createProgram);
ProgramRouter.get('/show', getPrograms);
ProgramRouter.get('/show/:id', getProgramById);
ProgramRouter.put('/update/:id', updateProgram);
ProgramRouter.delete('/delete/:id', deleteProgram);

module.exports = ProgramRouter;
