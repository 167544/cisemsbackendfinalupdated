const express = require('express');
const { getDB, getCollection} = require('./dbconnection')

const InsertData = express.Router().post("/", async (req, res) => {
    try {
        const collection = getCollection()
        const result = await collection.insertMany(req.body);
        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = InsertData;
