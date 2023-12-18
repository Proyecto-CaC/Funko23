const express = require('express');
const router = express.Router();
const validateInput = require('../middlewares/validator');
const { body } = require('express-validator');

const {login, loginPost, register, registerPost, logout} = require('../controllers/authControllers');


const loginValidation = [
    body('email')
        .isEmail()
        .withMessage('Necesito que ingrese un correo válido'),
    body('password')
        .isLength({ min: 6 })
        .isAlphanumeric()
        .withMessage('La contraseña debe tener al menos 6 caracteres y contener letras y números.')
];
router.post('/temp', (req, res) => {
    console.log(req.body);
    res.send('¡Funciona!');
});


router.get('/login',login);
router.post('/login',(req, res) => loginPost);
router.get('/register',register);
router.post('/register',(req, res) => registerPost);
router.get('/logout',logout);


module.exports = router;