function authMiddleware(req, res, next) {
    const statusLog = req.query.statusLog

    if(statusLog !== 'true') {
        return res.status(401).json({
            message: "Acesso Negado, faça o login!"
        })
    }

    next()
}

module.exports = authMiddleware