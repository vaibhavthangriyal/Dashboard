const express = require('express');
const router = express.Router();
const Customer = require('../../models/Customer');

router.post('/addCustomer', (req, res) => {
  let newCustomer = new Customer({
    customer_type: req.body.name,
  });
  newCustomer.save()
    .then(Customer => res.json(Customer))
    .catch(err => console.log(err));
});

router.put('/update/:CustomerId', (req, res) => {
  let newCustomer = new Customer({
    customer_type: req.body.name,
  });
  newCustomer.findById(req.params.CustomerId, function (err, customer) {
    if (!customer)
      res.status(404).send("data is not found");
    else {
      Customer.customer_type = req.body.customer_type;
      Customer.save().then(Customer => {
        res.send(Customer);
      })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    }
  });
}
);

router.get('/all', (req, res) => {
  Customer.find((err, Customer) => {
    res.send(Customer);
  })
    .catch(err => {
      res.status(400).send("Update not possible");
    });
}
);

router.delete('/delete/:CustomerId', (req, res) => {
  Customer.remove({ _id: req.params.CustomerId }, (err, Customer) => {
    if (err) throw err;
    res.send(Customer)
  })
    .catch(err => {
      res.status(400).send(err);
    });
}
);


module.exports = router;
