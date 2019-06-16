const express = require('express');
const router = express.Router();
const Country = require('../../models/Country');

router.post('/addCountry', (req, res) => {
  let newCountry = new Country({
    company_name: req.body.company_name,
    country_name: req.body.country_name,
    is_active: req.body.is_active
  });
  newCountry.save()
    .then(Country => res.json(Country))
    .catch(err => console.log(err));
});

router.put('/update/:CountryId', (req, res) => {
  let newCountry = new Country({
    company_name: req.body.company_name,
    country_name: req.body.country_name,
    is_active: req.body.is_active
  });
  newCountry.findById(req.params.CountryId, function (err, country) {
    if (!country)
      res.status(404).send("data is not found");
    else {
      country.company_name = req.body.company_name;
      country.country_name = req.body.country_name;
      country.is_active = req.body.is_active;
      Country.save().then(country => {
        res.send(country);
      })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    }
  });
}
);

router.get('/all', (req, res) => {
  Country.find((err, country) => {
    res.send(country);
  })
    .catch(err => {
      res.status(400).send("Update not possible");
    });
}
);

router.delete('/delete/:CountryId', (req, res) => {
  Country.remove({ _id: req.params.CountryId }, (err, country) => {
    if (err) throw err;
    res.send(country)
  })
    .catch(err => {
      res.status(400).send(err);
    });
}
);


module.exports = router;
