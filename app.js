const express = require('express');
const app = express();
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const wildRoutes = require('./Routes/Wildlife.Routes');
const JoinTeamRoutes = require('./Routes/JoinTeam.Routes');
const ProgramRoutes = require('./Routes/Program.Routes');
const ContactUsRoutes = require('./Routes/ContactUs.Routes');

// ✅ Use Morgan for logging
app.use(morgan('dev'));
app.use(express.json());

// ✅ Swagger Setup
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Save Wildlife API",
      version: "1.0.0",
      description: "API documentation for Save Wildlife project",
    },
    servers: [
      {
        url: process.env.BASE_URL || "https://guardians-of-wildlife-backend.onrender.com",
      },
    ],
  },
  apis: ["./Routes/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ✅ Register routes
app.use('/api/wildlife', wildRoutes);
app.use('/api/jointeam', JoinTeamRoutes);
app.use('/api/programs', ProgramRoutes);
app.use('/api/contactus', ContactUsRoutes);

// ✅ Root route (fixes 404 on Render)
app.get('/', (req, res) => {
  res.send('🦁 Guardians of Wildlife Backend is running successfully! Visit /api-docs for documentation.');
});

module.exports = app;

// Example: http://localhost:8000/api-docs/
