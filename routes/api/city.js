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
  let newCity = {
    company_name: req.body.company_name,
    country_name: req.body.country_name,
    region_name: req.body.region_name,
    city_name: req.body.city_name,
    is_active: req.body.is_active,
  }
  City.findByIdAndUpdate(req.params.CityId, newCity, {}, function (err, city) {
    if (!city)
      res.status(404).send("data is not found");
    else {
      city.company_name = req.body.company_name;
      city.country_name = req.body.country_name;
      city.region_name = req.body.region_name;
      city.city_name = req.body.city_name;
      city.is_active = req.body.is_active;
      city.save().then(city => {
        res.send(city);
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
