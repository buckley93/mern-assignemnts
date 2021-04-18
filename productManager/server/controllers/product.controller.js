const Product = require('../models/product.model');
const productRoutes = require('../routes/product.routes');

module.exports.index = (req, res) => {
    res.json({ message: "hello world" });
}

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports.getAllProducts = (req,res) => {
    Product.find({})
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

module.exports.getOneProduct = (req, res) => {
    Product.findById({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then((updateProduct) => {
            console.log("in updateProduct");
            console.log(updateProduct);
            res.json(updateProduct);
        })
        .catch((err) => {
            console.log("error in updateProduct");
            res.json(err);
        })
}

module.exports.delete = (req, res) => {
    console.log("We are in the deleteProduct in the controller");
    Product.findByIdAndDelete({_id: req.params.id})
    .then((deleteThisProduct) => {
        console.log(deleteThisProduct);
            res.json(deleteThisProduct);
        })
    .catch(err => {
        console.log("in deleteProduct in the controller");
        console.log(err);
    })
}