const express = require('express');

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

// Variables

const app = express();

// Set Up View Engine

app.set('view engine', 'pug');

// Set Up A Static Server

app.use(express.static('public'));

// Routes

app.use(mainRoutes);
app.use('/projects', projectRoutes);

// Start The Server

app.listen(3000, () => console.log('App Is Listening To Port 3000..'));