module.exports = {
home: (req, res) => {
    res.render('index', {
        title: 'Home',
    });
},
contact: (req, res) => {
    res.render('../views/contact.ejs', {
        title: 'Contacto',
    });
},
about: (req, res) => {
    res.render('/shop/contact', {
        title: 'Contacto',
    });
},
faqs: (req, res) => {
    res.render('/shop/contact', {
        title: 'Preguntas Frecuentes',
    });
},
};