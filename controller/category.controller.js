const {category} = require('../models/category');

module.exports = {
    createCategories(req,res){
        category
        .insertMany(req.body)
        .then(categories=>{
            if(categories.length>0)
            res.send('categories created successfully');
            else
            res.send('failed');
        })
        .catch(err=>res.send(err));
    },
    fetchAllCategory(req,res){
        category
        .find({})
        .then(categories=>{
            if(categories.length>0)
            res.send(categories);
            else
            res.send('failed');
        })
        .catch(err=>res.send(err));
    }
}