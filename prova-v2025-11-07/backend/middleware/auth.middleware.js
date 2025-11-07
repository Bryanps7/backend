function authMiddleware(req, res, next) {
    const statusLog = req.query.statusLog

    if(statusLog !== 'true') {
        return res.status(401).json({
            message: 'Não autorizado, faça login!'
        })
    }

    next()
}

module.exports = authMiddleware