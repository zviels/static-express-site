const express = require('express');

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');
const { handlePageNotFoundError, handleServerError } = require('./errorHandlers');

// Variables

const app = express();

// Set Up View Engine

app.set('view engine', 'pug');

// Set Up Static Server

app.use('/static', express.static('public'));

// Routes

app.use(mainRoutes);
app.use('/projects', projectRoutes);

// Error Handlers

app.use(handlePageNotFoundError);
app.use(handleServerError);

// Start The Server

app.listen(process.env.PORT || 3000);