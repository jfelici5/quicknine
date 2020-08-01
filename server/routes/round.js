const express = require('express');
const router = express.Router();
const { Round } = require("../models/Round");


const { auth } = require("../middleware/auth");

//=================================
//             User
//=================================

router.post("/uploadRound", auth, (req, res) => {
    
    const round = new Round(req.body)

    round.save((err) => {
        if(err) return res.status(400).json({success: false, err})
        return res.status(200).json({success: true})
    })

});

router.post("/getRounds", auth, (req, res) => {
    Round.find()
    .exec((err, rounds) => {
        if(err) return res.status(400).json({success: false, err})
        res.status(200).json({success: true, rounds})
    })    
})



module.exports = router;
