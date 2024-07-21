const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
require("dotenv").config()
const Data = require('./SampleSchema.js');


// Connect to MongoDB
const connection = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("database Connected")
    } catch (err) {
        console.log(err)
    }

}


// const DataSchema = new mongoose.Schema({}, { strict: false });
// const Data = mongoose.model('SampleData', DataSchema);

// API to get data

// app.get('/', (req, res) => {
//     res.send('Hello Worlddd!')
// })

app.get('/', async (req, res) => {
    try {
        res.send('welcome to backend')
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.get('/api/data', async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).send(data);
        //
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

    // try {
    //     const data = "hi"
    //     res.status(200).send(data);
    //     //
    // } catch (error) {
    //     res.status(500).json({ message: error.message });
    // }
});

app.listen(process.env.PORT, () => {
    connection()
    console.log(`Example app listening on port ${process.env.PORT}`)
})

