const express = require('express');
const { projects } = require('../data.json');

// Variables

const router = express.Router();

// Routes

router.get('/:id', (req, res) => {

    const { id } = req.params;
    const project = projects[+ id];

    res.render('project', { project });

});

// Export Routes

module.exports = router;