const express = require('express');
const router = express.Router();
const City = require('../../models/City');

router.post('/addCity', (req, res) => {
  let newCity = new City({
    company_name: req.body.company_name,
    country_name: req.body.country_name,
    region_name: req.body.region_name,
    city_name: req.body.city_name,
    is_active: req.body.is_active,
  });
  newCity.save()
    .then(City => res.json(City))
    .catch(err => console.log(err));
});

router.put('/update/:CityId', (req, res) => {
  let newCity = new City({
    company_name: req.body.company_name,
    country_name: req.body.country_name,
    region_name: req.body.region_name,
    city_name: req.body.city_name,
    is_active: req.body.is_active,
  });
  newCity.findById(req.params.CityId, function (err, City) {
    if (!City)
      res.status(404).send("data is not found");
    else {
      City.company_name = req.body.company_name;
      City.country_name = req.body.country_name;
      City.region_name = req.body.region_name;
      City.city_name = req.body.city_name;
      City.is_active = req.body.is_active;
      City.save().then(City => {
        res.send(City);
      })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    }
  });
}
);

router.get('/all', (req, res) => {
  City.find((err, City) => {
    res.send(City);
  })
    .catch(err => {
      res.status(400).send("Update not possible");
    });
}
);

router.delete('/delete/:CityId', (req, res) => {
  City.remove({ _id: req.params.CityId }, (err, City) => {
    if (err) throw err;
    res.send(City)
  })
    .catch(err => {
      res.status(400).send(err);
    });
}
);


module.exports = router;
