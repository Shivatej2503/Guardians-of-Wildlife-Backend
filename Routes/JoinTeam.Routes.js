let express = require('express');
const JoinTeamRouter = express.Router();
let {
  joinTeam,
  getTeamMembers,
  getTeamMemberById,
  updateTeamMember,
  deleteTeamMember,
} = require('../Controller/JoinTeam.controller');

/**
 * @swagger
 * tags:
 *   name: JoinTeam
 *   description: API endpoints for Join Team functionality
 */

/**
 * @swagger
 * /jointeam/add:
 *   post:
 *     summary: Add a new team member
 *     tags: [JoinTeam]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the team member
 *               email:
 *                 type: string
 *                 description: Email of the team member
 *               interest:
 *                 type: string
 *                 description: Area of interest of the team member
 *     responses:
 *       200:
 *         description: Team member added successfully
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /jointeam/show:
 *   get:
 *     summary: Retrieve all team members
 *     tags: [JoinTeam]
 *     responses:
 *       200:
 *         description: A list of team members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: Member ID
 *                   name:
 *                     type: string
 *                     description: Name of the team member
 *                   email:
 *                     type: string
 *                     description: Email of the team member
 *                   interest:
 *                     type: string
 *                     description: Interest of the team member
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /jointeam/{id}:
 *   get:
 *     summary: Retrieve a team member by ID
 *     tags: [JoinTeam]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: MongoDB ID of the team member
 *     responses:
 *       200:
 *         description: Team member details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 interest:
 *                   type: string
 *       404:
 *         description: Team member not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /jointeam/{id}:
 *   put:
 *     summary: Update a team member by ID
 *     tags: [JoinTeam]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: MongoDB ID of the team member
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               interest:
 *                 type: string
 *     responses:
 *       200:
 *         description: Team member updated successfully
 *       404:
 *         description: Team member not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /jointeam/{id}:
 *   delete:
 *     summary: Delete a team member by ID
 *     tags: [JoinTeam]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: MongoDB ID of the team member to delete
 *     responses:
 *       200:
 *         description: Team member deleted successfully
 *       404:
 *         description: Team member not found
 *       500:
 *         description: Server error
 */

JoinTeamRouter.post('/add', joinTeam); // POST http://localhost:8000/jointeam/add
JoinTeamRouter.get('/show', getTeamMembers); // GET http://localhost:8000/jointeam/show
JoinTeamRouter.get('/show/:id', getTeamMemberById); // GET http://localhost:8000/jointeam/:id
JoinTeamRouter.put('/update/:id', updateTeamMember); // PUT http://localhost:8000/jointeam/:id
JoinTeamRouter.delete('/delete/:id', deleteTeamMember); // DELETE http://localhost:8000/jointeam/:id


module.exports = JoinTeamRouter;
