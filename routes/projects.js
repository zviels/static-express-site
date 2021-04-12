const express = require('express');
const { projects } = require('../data.json');

// Variables

const router = express.Router();

// Routes

router.get('/:id', (req, res, next) => {

    const { id } = req.params;

    if (id >= projects.length) 
        return next();

    const project = projects [ id ];
    res.render('project', { project });

});

// Export Routes

module.exports = router;