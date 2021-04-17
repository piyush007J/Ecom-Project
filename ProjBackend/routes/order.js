const express = require("express");
const router = express.Router();

const {isSignIn,isAuthenticated,isAdmin} = require("../controllers/auth");
const {getUserById,pushOrderInPurchesList} = require("../controllers/user");
const {updateStock} = require("../controllers/product");
const {getOrderById,createOrder,getAllOrders,getOrderStatus,updateStatus} = require("../controllers/order")

//params
router.param("userId",getUserById);
router.param("orderId",getOrderById)

//Actual routes
//Create 
router.post("/order/create/:userId",isSignIn,isAuthenticated,pushOrderInPurchesList,updateStock,createOrder);

//read
router.get("/order/all/:userId",isSignIn,isAuthenticated,isAdmin,getAllOrders)

//status of order
router.get("/order/status/:userId",isSignIn,isAuthenticated,isAdmin,getOrderStatus)
router.put("/order/:orderId/status/:userId",isSignIn,isAuthenticated,isAdmin,updateStatus)


module.exports = router