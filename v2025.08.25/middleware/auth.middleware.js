function checkAuth(req, res, next) {
    const token = req.headers["authorization"]
    if(token === "tk123") {
        next()
    } else {
        res.status(403).json({
            message: "Acesso Negado!"
        })
    }
}