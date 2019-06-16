const express = require('express');
const router = express.Router();
const Region = require('../../models/Region');

router.post('/addRegion', (req, res) => {
  let newRegion = new Region({
    company_name: req.body.company_name,
    country_name: req.body.country_name,
    region_name: req.body.region_name,
    is_active: req.body.is_active
  });
  newRegion.save()
    .then(Region => res.json(Region))
    .catch(err => console.log(err));
});

router.put('/update/:RegionId', (req, res) => {
  let newRegion = new Region({
    company_name: req.body.company_name,
    country_name: req.body.country_name,
    region_name: req.body.region_name,
    is_active: req.body.is_active
  });
  newRegion.findById(req.params.RegionId, function (err, Region) {
    if (!Region)
      res.status(404).send("data is not found");
    else {
      Region.company_name = req.body.company_name;
      Region.country_name = req.body.country_name;
      Region.region_name = req.body.region_name;
      Region.is_active = req.body.is_active;
      Region.save().then(Region => {
        res.send(Region);
      })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    }
  });
}
);

router.get('/all', (req, res) => {
  Region.find((err, Region) => {
    res.send(Region);
  })
    .catch(err => {
      res.status(400).send("Update not possible");
    });
}
);

router.delete('/delete/:RegionId', (req, res) => {
  Region.remove({ _id: req.params.RegionId }, (err, Region) => {
    if (err) throw err;
    res.send(Region)
  })
    .catch(err => {
      res.status(400).send(err);
    });
}
);


module.exports = router;
