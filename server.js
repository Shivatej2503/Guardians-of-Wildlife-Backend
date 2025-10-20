const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./app');

mongoose.set('strictQuery', false);

//mongoDB Connection
mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB", process.env.DB_URL);
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
}).catch(err => {
    console.error("MongoDB connection error:", err);
})