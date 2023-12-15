const path = require('path');
const {getAll} = require('../models/product.model');
const data = [
    {
        "product_id": 11,
        "licence_name": "Star Wars",
        "category_name": "Figuras coleccionables",
        "product_name": "Baby Yoda",
        "product_description": "Figura coleccionable Star Wars",
        "product_price": 1799.99,
        "dues": 10,
        "product_sku": "STW001001",
        "img_front": "/public/img/star-wars/baby-yoda-1.webp/",
        "img_back": "/img/products/star-wars/baby-yoda-box.webp",
    },
    {
        "product_id": 10,
        "licence_name": "Pokemon",
        "category_name": "Figuras coleccionables",
        "product_name": "Vulpix",
        "product_description": "Figura coleccionable Pokemon",
        "product_price": 1799.99,
        "dues": 10,
        "product_sku": "PKM001005",
        "img_front": "/img/products/pokemon/vulpix-1.webp",
        "img_back": "/img/products/pokemon/vulpix-box.webp"
    },
    {
        "product_id": 6,
        "licence_name": "Harry Potter",
        "category_name": "Figuras coleccionables",
        "product_name": "Snape Patronus",
        "product_description": "Figura coleccionable Harry Potter",
        "product_price": 1799.99,
        "dues": 10,
        "product_sku": "HPT001004",
        "img_front": "/img/products/harry-potter/snape-patronus-1.webp",
        "img_back": "/img/products/harry-potter/snape-patronus-box.webp"
    }
]


module.exports = {
shop: async (req, res) => {
    const dbdata = await getAll();

    console.log(dbdata);
       
    
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

