const ProductController = require('../controllers/product.controller');
module.exports = function(app) {
    app.get('/api', ProductController.index);
    app.post('/api/createProduct', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getOneProduct);    
}