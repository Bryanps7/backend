function logMiddleware(req, res, next) {
    if (req.path.startWith('/usuarios')) {
        console.log(`Entrou na rota ${req.path} com o método ${req.method}`);
    } else if(req.path.startWith('/login')) {
        console.log(`Entrou na rota ${req.path} com o método ${req.method}`);        
    }

    next()
}

module.exports = logMiddleware