const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');




// Load User model
const User = require('../../models/User');
const Admin = require('../../models/Admin');
const Product = require('../../models/Products');
// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  Admin.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      const newAdmin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
          if (err) throw err;
          newAdmin.password = hash;
          newAdmin
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  Admin.findOne({ email }).then(user => {
    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   POST api/users/addUser
// @desc    add user
// @access  Private
//,passport.authenticate('jwt', { session: false }),
router.post(
  '/addUser',
  (req, res) => {
    let newUser = new User({
      first_name: req.body.first_name,
      email: req.body.email,
      mobile: req.body.mobile,
      home_phone: req.body.home_phone,
      buisness_phone: req.body.buisness_phone,
      joining_date: req.body.joining_date,
      city_name: req.body.city_name,
      district_name: req.body.district_name,
      address: req.body.address,
      pin: req.body.pin,
      title: req.body.title,
      user_role: req.body.user_role,
      last_name :req.body.last_name,
      region_name: req.body.region_name,
      manager_name: req.body.manager_name,
      is_active: req.body.is_active,
      password: req.body.password
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  }
);

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


// @route   PUT api/users/update/:id
// @desc    Return current user
// @access  Private
router.put(
  '/update/:userId',
  (req, res) => {
    let newUser = new User({
      first_name: req.body.first_name,
      email: req.body.email,
      mobile: req.body.mobile,
      home_phone: req.body.home_phone,
      buisness_phone: req.body.buisness_phone,
      joining_date: req.body.joining_date,
      city_name: req.body.city_name,
      district_name: req.body.district_name,
      address: req.body.address,
      pin: req.body.pin,
      title: req.body.title,
      user_role: req.body.user_role,
      region_name: req.body.region_name,
      manager_name: req.body.manager_name,
      is_active: req.body.is_active,
      password: req.body.password
    });
    User.findById(req.params.userId, function (err, user) {
      if (!user)
        res.status(404).send("data is not found");
      else
        user.first_name = req.body.first_name;
      user.last_name = req.body.last_name;
      user.mobile = req.body.mobile;
      user.home_phone = req.body.home_phone;
      user.buisness_phone = req.body.buisness_phone;
      user.joining_date = req.body.joining_date;
      user.region_name = req.body.region_name;
      user.city_name = req.body.city_name;
      user.district_name = req.body.district_name;
      user.address = req.body.address;
      user.pin = req.body.pin;
      user.title = req.body.title;
      user.user_role = req.body.user_role;
      user.manager_name = req.body.manager_name;
      user.is_active = req.body.is_active;
      user.save().then(user => {
        res.send(user);
      })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    });
  }
);

router.put(
  '/updatep/:pId',
  (req, res) => {
    Product.findById(req.params.pId, function (err, user) {
      if (!user)
        res.status(404).send("data is not found");
      else
        user.pname = req.body.pname;
      user.price = req.body.price;
      user.save().then(user => {
        res.send(user);
      })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
    });
  }
);

// @route   GET api/users/all
// @desc    Return all users
// @access  Private
router.get('/all', (req, res) => {
  User.find((err, user) => {
    res.send(user);
  })
    .catch(err => {
      res.status(400).send("Update not possible");
    });
}
);

router.get('/allp', (req, res) => {
  Product.find((err, user) => {
    res.send(user);
  })
    .catch(err => {
      res.status(400).send("Update not possible");
    });
}
);

// @route   delete api/users/delete/id
// @desc    delete a  user
// @access  Private
router.delete( '/delete/:userId', (req, res) => {
    User.remove({ _id: req.params.userId }, (err, user) => {
      if (err) throw err;
      res.send(user)
    })
      .catch(err => {
        res.status(400).send(err);
      });
  }
);

router.delete( '/deletep/:pId',(req, res) => {
    Product.remove({ _id: req.params.pId }, (err, user) => {
      if (err) throw err;
      res.send(user)
    })
      .catch(err => {
        res.status(400).send(err);
      });
  }
);


router.post('/login/user', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name };
        res.status(200).json({
          success: true,
          payload
        });
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});


module.exports = router;
