const {conn} = require ('../config/conn')


const getAll = async () => {
    try {
        const [data] = await pool.query("SELECT product.product_id, product.product_name, product.product_description,product.price,product.stock,product.sku,product.dues,product.image_front,product.image_back,product.create_time,licence.licence_name,product.category_id FROM product JOIN licence ON product.licence_id = licence.licence_id;")
        
        return data;
    } catch (error) {
        console.error('Error querying MySql:', error);
        throw error;
    } 
}
module.exports = {
    getAll
}