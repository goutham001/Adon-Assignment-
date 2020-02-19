const { product } = require('../models/product');

module.exports = {
    createProducts(req, res) {
        product
            .insertMany(req.body)
            .then(products => {
                if (products.length > 0)
                    res.send('products created successfully');
                else
                    res.send('failed');
            })
            .catch(err => res.send(err));
    },
    fetchProductsByCategory(req, res) {
        product
            .find({ "category": req.query.category })
            .then(products => {
                if (products)
                    res.send(products);
                else
                    res.send('no product found');
            })
            .catch(err => res.send(err));
    },
    fetchAll(req, res) {
        product
            .find({})
            .then(products => {
                if (products)
                    res.send(products);
                else
                    res.send('failed');
            })
            .catch(err => res.send(err));
    },
    fetchByProductId(req, res) {
        product
            .findOne({ product_id: req.query.pid })
            .then(product => {
                if (product)
                    res.send(product);
                else
                    res.send('product not found');
            })
            .catch(err => res.send(err));
    },
    updateProduct(req, res) {
        product.findOneAndUpdate(req.query.id, req.body).then(prod => {
            console.log(prod);
            if (prod) {
                res.send(prod);
            }
            else {
                res.send('failed');
            }
        })
            .catch(err => { res.send(err) });
    },
    deleteProduct(req, res) {
        product
            .findByIdAndRemove(req.query.id)
            .then(deleted => {
                if (deleted)
                    res.send('product deleted successfully');
                else
                    res.send('failed');
            })
            .catch(err => res.send(err));
    }
}