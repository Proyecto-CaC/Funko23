const {conn} = require('../config/conn')


const getAll = async () => {
   try {
    const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence on product.licence_id = licence.licence_id;');
    return rows;

    } catch (error) {
      return  {
    error: true,
    message: 'Hemos encontrado un error: ' + error,
      }
} finally {
    conn.releaseConnection();
   }
}

const getOne = async (params) =>{
    try {
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', params);
        return rows;
    
        } catch (error) {
          return  {
        error: true,
        message: 'Hemos encontrado un error: ' + error,
          }
    } finally {
        conn.releaseConnection();
       }
  
      
}

const createItem = async (params) => {
  try {
    const [product] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, licence_id, category_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', params);
    conn.releaseConnection(); // Release the connection
    return product;
  } catch (error) {
    console.error('An error occurred while creating the item:', error);
    conn.releaseConnection(); // Release the connection even in case of error
    throw error; // Re-throw the error to be handled by the caller
  }
};
    const editItem = async (params, id) => {
      try {
          const [product] = await conn.query('UPDATE product SET ? WHERE ?', [params, id]);
          return product;
  
          } catch (error) {
            return  {
          error: true,
          message: 'Hemos encontrado un error al editar: ' + error,
            }
      } finally {
          conn.releaseConnection();
         }
        }

     const deleteOne = async (params) => {
      try {
          const [rows] = await conn.query('DELETE FROM product WHERE ?;', params);
          return rows;
      
          } catch (error) {
            return  {
          error: true,
          message: 'Hemos encontrado un error al eliminar: ' + error,
            }
      } finally {
          conn.releaseConnection();
         }
}

module.exports = {
    getAll,
    getOne,
    createItem,
    deleteOne,
    editItem
}