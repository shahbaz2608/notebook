const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.json({'notes':'hello'});
});
router.get('/get',(req,res) => {
    res.json({'notes':'get'});
});

module.exports = router;