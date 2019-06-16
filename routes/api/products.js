const express = require('express');
const router = express.Router();
const ProductSchema = require('../../models/product');

router.post(
    '/addProduct',
    (req, res) => {
      let newProduct = new Product({
        pname: req.body.pname,
        price: req.body.price,
      });
      newProduct
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
  
  
    }
  );

router.put(
    '/update/:productId',
    (req, res) => {
        let newProduct = new ProductSchema({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        });

        Product.findById(req.params.productId, function (err, product) {
            if (!product)
                res.status(404).send("data is not found");
            else
                product.name = req.body.name;
            product.price = req.body.price;
            product.category = req.body.category;
            product.save().then(product => {
                res.send(product);
            })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        });


    }
);

router.get(
    '/all',
    (req, res) => {
        Product.find((err, product) => {
            res.send(product);
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    }
);

// @route   delete api/products/delete/id
// @desc    delete a  product
// @access  Private
router.delete(
    '/delete/:productId',
    (req, res) => {
        product.remove({ _id: req.params.productId }, (err, product) => {
            if (err) throw err;
            res.send(product)
        })
            .catch(err => {
                res.status(400).send(err);
            });
    }
);


module.exports = router;
