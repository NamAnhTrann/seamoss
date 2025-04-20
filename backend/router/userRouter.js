const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/login/user/api", userController.loginUser);
router.post("/signup/user/api", userController.signupUser);
module.exports = router;
