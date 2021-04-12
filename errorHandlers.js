// Handle 404 Errors

const handlePageNotFoundError = (req, res, next) => {

    const error = new Error('Page Not Found!');
    error.status = 404;

    next(error);

}

// Handle 500 Errors

const handleServerError = (error, req, res, next) => res.status(error.status || 500).send(error.message);
    
// Export Error Handlers

module.exports = { handlePageNotFoundError, handleServerError };