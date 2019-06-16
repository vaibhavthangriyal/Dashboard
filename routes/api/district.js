const express = require('express');
const router = express.Router();
const District = require('../../models/District');

router.post('/addDistrict', (req, res) => {
  let newDistrict = new District({
    company_name: req.body.company_name,
    country_name: req.body.country_name,
    region_name: req.body.region_name,
    city_name: req.body.city_name,
    district_name: req.body.district_name,
    is_active: req.body.is_active
  });
  newDistrict.save()
    .then(District => res.json(District))
    .catch(err => console.log(err));
});

router.put('/update/:DistrictId', (req, res) => {
  let newDistrict = new District({
    company_name: req.body.company_name,
    country_name: req.body.country_name,
    region_name: req.body.region_name,
    city_name: req.body.city_name,
    district_name: req.body.district_name,
    is_active: req.body.is_active
  });
  newDistrict.findById(req.params.DistrictId, function (err, District) {
    if (!District)
      res.status(404).send("data is not found");
    else {
      District.company_name = req.body.company_name;
      District.country_name = req.body.country_name;
      District.region_name = req.body.region_name;
      District.city_name = req.body.city_name;
      District.district_name = req.body.district_name;
      District.is_active = req.body.is_active;
      District.save().then(District => {
        res.send(District);
      })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    }
  });
}
);

router.get('/all', (req, res) => {
  District.find((err, District) => {
    res.send(District);
  })
    .catch(err => {
      res.status(400).send("Update not possible");
    });
}
);

router.delete('/delete/:DistrictId', (req, res) => {
  District.remove({ _id: req.params.DistrictId }, (err, District) => {
    if (err) throw err;
    res.send(District)
  })
    .catch(err => {
      res.status(400).send(err);
    });
}
);


module.exports = router;
