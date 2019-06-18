const express = require('express');
const router = express.Router();
const BU = require('../../models/BU');

router.post('/addBU', (req, res) => {
  let newBU = new BU({
    bu_name: req.body.bu_name,
    bu_id: req.body.bu_id,
  });
  newBU.save()
    .then(BU => res.json(BU))
    .catch(err => console.log(err));
});

router.put('/update/:BUId', (req, res) => {
  let newBU = new BU({
    bu_name: req.body.bu_name,
    bu_id: req.body.bu_id,
  });
  BU.findByIdAndUpdate(req.params.BUId, {
    bu_name: req.body.bu_name,
    bu_id: req.body.bu_id,
  }, {}, (err, bu) => {
    if (!BU)
      res.status(404).send("data is not found");
    else {
      bu.bu_name = req.body.bu_name;
      bu.bu_id = req.body.bu_id;
      bu.save().then(BU => {
        res.send(BU);
      })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    }
  })

}
);

router.get('/all', (req, res) => {
  BU.find((err, bu) => {
    res.send(bu);
  })
    .catch(err => {
      res.status(400).send("Update not possible");
    });
}
);

router.delete('/delete/:BUId', (req, res) => {
  BU.remove({ _id: req.params.BUId }, (err, bu) => {
    if (err) throw err;
    res.send(bu)
  })
    .catch(err => {
      res.status(400).send(err);
    });
}
);


module.exports = router;
