function authMiddleware(req, res, next) {

    const statusLog = req.query.statusLog
    console.log('StatusLog: ', statusLog);

    if(statusLog !== 'true') {
        return res.status(401).json({
            message: 'Faça o login vadia!'
        })
    }

    next()
}

module.exports = authMiddleware