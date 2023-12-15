const path = require('path');
const {getAll} = require('../models/product.model');
module.exports = {
shop: async (req, res) => {
    const data = await getAll();

    console.log(data);
       
    
    res.render(path.resolve(__dirname, '../views/shop/shop.ejs'), {
        title: 'Tienda', data,
    })
},
item: (req, res) => {
    const itemId = req.params.id;
    
    const item = data.find(item.product_id == itemId);

    res.render(path.resolve(__dirname, '../views/shop/item.ejs'), {
        title: 'Item',
        item,
    });
},
addItem: (req, res) => res.send('Esta es la ruta para agregar un nuevo item'),
cart: (req, res) =>
    res.render(path.resolve(__dirname, '../views/shop/cart.ejs'), {
        title: 'Carrito',
    }),

addToCart: (req, res) => res.send('Esta es la ruta para agregar un item al CARRITO'),
}

