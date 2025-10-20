const express = require('express');
const app = express();
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const wildRoutes = require('./Routes/Wildlife.Routes');
const JoinTeamRoutes = require('./Routes/JoinTeam.Routes');
const ProgramRoutes = require('./Routes/Program.Routes');
const ContactUsRoutes = require('./Routes/ContactUs.Routes');

// ✅ Use Morgan for logging all HTTP requests
app.use(morgan('dev'));
app.use(express.json());


//Swagger Setup
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
                url: "http://localhost:8000",
            },
        ],
    },
    apis: ["./Routes/*.js"], // Path to the API docs
};

const swaggerSpec = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware to log requests

app.use(express.json());
app.use('/wildlife', wildRoutes);
app.use('/jointeam', JoinTeamRoutes);
app.use('/programs', ProgramRoutes);
app.use('/contactus', ContactUsRoutes);


module.exports = app;




//http://localhost:8000/api-docs/

