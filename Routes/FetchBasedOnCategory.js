const express = require('express');
const { getCollection } = require('./dbconnection');

const router = express.Router();

router.get('/:category', async (req, res) => {
    try {
        const collection = getCollection(); // Assuming this function returns the collection from MongoDB

        const { category } = req.params;
        
        // Fetch data based on the provided category
        const data = await collection.find({ Category: category }).toArray();

        if (data.length === 0) {
            return res.status(404).json({ error: 'No data found for the provided category' });
        }

        res.json(data);
    } catch (err) {
        console.error('Error fetching data based on category:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
