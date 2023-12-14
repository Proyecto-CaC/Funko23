const express = require('express');
const app = express();
const methodOverride = require('method-override');
const path = require('path');


/*Routes imports*/

const mainRoutes  = require('./src/routes/mainRoutes');
const shopRoutes  = require('./src/routes/shopRoutes');
const authRoutes  = require('./src/routes/authRoutes');
const adminRoutes  = require('./src/routes/adminRoutes');


const PORT = 3004;
// Configuracion de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(express.static('public'));



app.use('/', mainRoutes); 
app.use('/shop', shopRoutes); 
app.use('/admin', adminRoutes); 
app.use('/auth', authRoutes); 

app.listen(PORT, () => console.log(`Servidor corriendo en 🎇 http://localhost:${PORT}`));