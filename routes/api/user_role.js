const express = require('express');
const router = express.Router();


const User_Role = require('../../models/UserRole');


router.post(
    '/addUserRole',
    (req, res) => {
        let user_role = new User_Role({
            user_role: req.body.user_role,
            can_access_bu: req.body.can_access_bu,
            can_access_company: req.body.can_access_company,
            can_access_country: req.body.can_access_country,
            can_access_customer: req.body.can_access_customer,
            can_access_district: req.body.can_access_district,
            can_access_region: req.body.can_access_region,
            can_access_therapy: req.body.can_access_therapy,
            can_access_users: req.body.can_access_users,
            can_access_city: req.body.can_access_city,
        });
        user_role
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
    }
);

router.put(
    '/update/:userId',
    (req, res) => {
        let new_user_role = new User_Role({
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
        User_Role.findById(req.params.userId, function (err, user) {
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

router.get('/all', (req, res) => {
    User_Role.find((err, user_role) => {
        res.send(user_role);
    })
        .catch(err => {
            res.status(400).send("Update not possible");
        });
}
);

router.delete('/delete/:roleId', (req, res) => {
    User.remove({ _id: req.params.roleId }, (err, user) => {
        if (err) throw err;
        res.send(user)
    })
        .catch(err => {
            res.status(400).send(err);
        });
}
);


module.exports = router;
