const express = require("express");
const router = express.Router();
const {getUserById,getUser,updateUser,userPurchesList}=require("../controllers/user")
const {isSignIn,isAdmin,isAuthenticated}=require("../controllers/auth")

router.param("userID",getUserById)

router.get("/user/:userID",isSignIn,isAuthenticated,getUser);
router.put("/user/:userID",isSignIn,isAuthenticated,updateUser);
router.get("/orders/user/:userID",isSignIn,isAuthenticated,userPurchesList);
module.exports=router