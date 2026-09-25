const express = require("express");
const  {SendEmailWithReply} = require("../controller/replymail");
const {SendEmailNoReply}=require("../controller/noreplymail")
const {userSignup,userSignin} = require("../controller/authcontroller");
const router = express.Router();
router.post("/signup", userSignup);
router.post("/signin", userSignin);
router.post("/send", SendEmailWithReply);
router.post("/sendnoreply",SendEmailNoReply)
module.exports = router;
