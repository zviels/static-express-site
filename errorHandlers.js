// Handle 404 Errors

const handlePageNotFoundError = (req, res, next) => {

    const error = new Error('Page Not Found!');
    error.status = 404;

    console.error('Oops! The Page You Are Looking For Does Not Exist!');
    res.status(404).render('page-not-found', { error });

}

// Handle 500 Errors

const handleServerError = (error, req, res, next) => {
    
    console.error('Oops! It Looks Like The Server Encountered An Error!');
    res.status(error.status || 500).render('error', { error });
    
}
    
// Export Error Handlers

module.exports = { handlePageNotFoundError, handleServerError };