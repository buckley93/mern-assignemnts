const Product = require('../models/product.model');
const productRoutes = require('../routes/product.routes');

module.exports.index = (req, res) => {
    res.json({ message: "hello world" });
}

module.exports.createProduct = (req, res) => {
    const { Title, Price, Description } = req.body;
    Product.create({
        Title,
        Price,
        Description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}
