const path = require('path');
const {getAll} = require('../models/product.model');

module.exports = {
admin: (req, res) => res.render(path.resolve(__dirname, '../views/admin/admin.ejs'),{
    title: 'Admin'
}),
create: (req, res) => res.render(path.resolve(__dirname, '../views/admin/create.ejs'), {
    title: 'Crear un nuevo Item'
}),
createItem: (req, res) => res.send('Esta es la ruta para agregar nuevo ITEM'),
edit: (req, res) => res.render(path.resolve(__dirname, '../views/admin/edit.ejs'),{
title: 'Editar Item'}),
editItem: (req, res) => res.send('Esta es la vista de MODIFICAR ITEM'),
deleteItem : (req, res) => res.send('Esta es la vista para ELIMINAR nuevo ITEM'),
}