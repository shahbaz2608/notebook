const express = require('express');
const User = require('../model/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.get('/',(req,res) => {
    res.json({'auth':'hello'});
});

router.post('/addUser',[
    body('name','plesae enter valid name').isLength({min : 3}),
    body('email','plesae enter valid name').isEmail(),
    body('password','password should atleast 5 chars').isLength({min : 5}),
], (req,res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.send(result.array());
      }
      User.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
      }).then(
        user => res.send(user)
      ).catch(
        err => res.send(err)
      );
});



module.exports = router;