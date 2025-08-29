const express = require('express');
const User = require("../models/User");
const router = express.Router();

//create user - POST /api/users
router.post("/", async (req, res) => {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);
});

//GET all users - GET /api/users
router.get("/", async (req, res) => {
    const users = await User.find();
    res.status(201).json(users);
})
//GET single user - GET /api/users/:id
router.get("/:id", async (req, res) => {
    //console.log(req.params.id);
    const user = await User.findById(req.params.id);
    res.status(201).json(user);
})

//UPDATE user - PUT /api/users/:id
router.put("/:id", async (req, res) => {
    //console.log(req.params.id);
    const update_value = req.body;
    const user = await User.findByIdAndUpdate(req.params.id,update_value,{new:true});
    res.status(201).json(user);
})
//DELETE user
router.delete("/:id",async (req,res) => {
    await User.findByIdAndDelete(req.params.id);
    res.sendStatus(204); 
})

module.exports = router;