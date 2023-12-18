const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadFiles')
const { isLogged } = require('../middlewares/login');
const {admin, create, createItem, edit, editItem, deleteItem} = require('../controllers/adminControllers');


//router.use(isLogged);
router.get('/',  admin);
router.get('/create' , create);
router.post('/create', upload.array('images',2), createItem);
router.get('/edit/:id', edit);
router.put('/edit/:id', upload.array('images',2), editItem);
router.delete('/delete/:id', deleteItem);

module.exports = router;