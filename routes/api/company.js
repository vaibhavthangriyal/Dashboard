const express = require('express');
const router = express.Router();
const Company = require('../../models/Company');

router.post('/addCompany', (req, res) => {
  let newCompany = new Company({
    company_name: req.body.company_name,
    is_active: req.body.is_active,
  });
  newCompany.save()
    .then(Company => res.json(Company))
    .catch(err => console.log(err));
});

router.put('/update/:CompanyId', (req, res) => {
  let newCompany = new Company({
    company_name: req.body.company_name,
    is_active: req.body.is_active,
  });
  newCompany.findById(req.params.CompanyId, function (err, company) {
    if (!company)
      res.status(404).send("data is not found");
    else {
      company.company_name = req.body.company_name;
      company.is_active = req.body.is_active;
      company.save().then(Company => {
        res.send(Company);
      })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    }
  });
}
);

router.get('/all', (req, res) => {
  Company.find((err, company) => {
    res.send(company);
  })
    .catch(err => {
      res.status(400).send("Update not possible");
    });
}
);

router.delete('/delete/:CompanyId', (req, res) => {
  Company.remove({ _id: req.params.CompanyId }, (err, company) => {
    if (err) throw err;
    res.send(company)
  })
    .catch(err => {
      res.status(400).send(err);
    });
}
);


module.exports = router;
