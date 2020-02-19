const productController = require('../controller/product.controller');
const categoryController = require('../controller/category.controller');
const userController = require('../controller/user.controller');
const { authorize, tokenVerification } = require('../middleware/auth');
const fileController = require('../controller/file.controller');
module.exports = function(app) {
    //category
    app.post('/create_category', [tokenVerification, authorize(['ADMIN'])], categoryController.createCategories);
    app.get('/fetch_all_category', [tokenVerification, authorize(['ADMIN', 'VIEWER'])], categoryController.fetchAllCategory);

    //product
    app.post('/create_products', [tokenVerification, authorize(['ADMIN'])], productController.createProducts);
    app.put('/update_products', [tokenVerification, authorize(['ADMIN', 'EDITOR'])], productController.updateProduct);
    app.get('/fetch_all', [tokenVerification, authorize(['ADMIN', 'VIEWER'])], productController.fetchAll);
    app.get('/fetch_products_by_category', [tokenVerification, authorize(['ADMIN', 'VIEWER'])], productController.fetchProductsByCategory);
    app.get('/fetch_product_by_id', [tokenVerification, authorize(['ADMIN', 'VIEWER', 'EDITOR'])], productController.fetchByProductId);
    app.get('/delete_product_by_id', [tokenVerification, authorize(['ADMIN'])], productController.deleteProduct);

    //user
    app.post('/register', userController.register);
    app.post('/login', userController.login);

    //fileUpload

    app.post('/upload', [tokenVerification, authorize(['ADMIN'])], fileController.uploadFile);
};