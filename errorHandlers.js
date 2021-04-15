// Handle 404 Errors

const handlePageNotFoundError = (req, res, next) => {

    const error = new Error('Page Not Found!');
    error.status = 404;

    console.error('Error Occurred! The App Was Pointed To An Undefined Route.');
    res.status(404).render('page-not-found', { error });

}

// Handle 500 Errors

const handleServerError = (error, req, res, next) => {
    
    console.error('Server Error Occurred.');
    res.status(error.status || 500).render('error', { error });
    
}
    
// Export Error Handlers

module.exports = { handlePageNotFoundError, handleServerError };