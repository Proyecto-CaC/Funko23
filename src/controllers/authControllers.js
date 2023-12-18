require('dotenv').config();
const path = require('path');

const userCredentials = {
    email: "root",
    password: "1234"
}

module.exports = {
login: (req, res) => res.render(path.resolve(__dirname, '../views/auth/login.ejs'), {
    title: 'Ingresar'
}),

loginUser: (req, res) => {
    const { email, password } = req.body;
    const emailValidation = userCredentials.email == email;
    const passwordValidation = userCredentials.password == password;

    req.session.isLogged = emailValidation && passwordValidation ? true : false;

    if (req.session.isLogged) {
        res.locals.isLogged = true;
        return res.redirect('../views/admin/admin.ejs');
    }

    return res.status(401).send('Credenciales inválidas');
},




loginPost: (req, res) => res.send('Esta es la ruta que valida datos del LOGIN'),
register: (req, res) => res.render(path.resolve(__dirname, '../views/auth/register.ejs'), {
    title: 'Registro'
}),
registerPost: (req, res) => res.send('Esta es la ruta que crea un nuevo USUARIO'),
logout: (req, res) =>  {
    req.session.isLogged = false;
    res.redirect('/home');
},

};