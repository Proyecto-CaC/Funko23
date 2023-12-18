const { validationResult } = require('express-validator');

// Middleware para validar la entrada de los datos de los usuarios
const validateInput = (req, res, next) => {
   //express-validator para validar los usuarios
    const errors = validationResult(req);
    // Si hay errores, envía respuesta 400
    if (!errors.isEmpty()) {
        res.status(400).send({ errors: errors.array() });
    }
    next();
};

module.exports = validateInput;