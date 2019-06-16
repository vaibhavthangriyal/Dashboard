const express = require('express');
const router = express.Router();
const Therapy = require('../../models/Therapy');

router.post('/addTherapy', (req, res) => {
  let newTherapy = new Therapy({
    therapyline: req.body.natherapylineme,
    therapyline_id: req.body.therapyline_id,
    bu_id: req.body.bu_id,
    notes: req.body.notes,
  });
  newTherapy.save()
    .then(Therapy => res.json(Therapy))
    .catch(err => console.log(err));
});

router.put('/update/:TherapyId', (req, res) => {
  let newTherapy = new Therapy({
    therapyline: req.body.natherapylineme,
    therapyline_id: req.body.therapyline_id,
    bu_id: req.body.bu_id,
    notes: req.body.notes,
  });
  newTherapy.findById(req.params.TherapyId, function (err, Therapy) {
    if (!Therapy)
      res.status(404).send("data is not found");
    else {
      Therapy.therapyline = req.body.therapyline;
      Therapy.therapyline_id = req.body.therapyline_id;
      Therapy.bu_id = req.body.bu_id;
      Therapy.notes = req.body.notes;
      Therapy.save().then(Therapy => {
        res.send(Therapy);
      })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    }
  });
}
);

router.get('/all', (req, res) => {
  Therapy.find((err, Therapy) => {
    res.send(Therapy);
  })
    .catch(err => {
      res.status(400).send("Update not possible");
    });
}
);

router.delete('/delete/:TherapyId', (req, res) => {
  Therapy.remove({ _id: req.params.TherapyId }, (err, Therapy) => {
    if (err) throw err;
    res.send(Therapy)
  })
    .catch(err => {
      res.status(400).send(err);
    });
}
);


module.exports = router;
