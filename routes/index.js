const express = require('express');
const { projects } = require('../data.json');

// Variables

const router = express.Router();

// Routes

router.get('/', (req, res) => res.render('index', { projects }));
router.get('/about', (req, res) => res.render('about'));

// Export Routes

module.exports = router;