const express = require("express");
const router = express.Router();

const {isSignIn,isAuthenticated,isAdmin} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");
//const {} = require("../controllers/category");
const {getProductById,createProduct,getProduct,photo,deleteProduct,updateProduct,getAllProducts,getAllUniqueCategories} = require("../controllers/product");


//all of params
router.param("userID",getUserById)
router.param("productID",getProductById)

//all of actual routes
//create route
router.post("/product/create/:userID",isSignIn,isAuthenticated,isAdmin,createProduct)
//read routes
router.get("/product/:productID",getProduct)
router.get("/product/photo/:productID",photo)

//delete routes
router.delete("/product/:productID/:userID",isSignIn,isAuthenticated,isAdmin,deleteProduct);


//update routes

router.put("/product/:productID/:userID",isSignIn,isAuthenticated,isAdmin,updateProduct);

//listing route
router.get("/products",getAllProducts)
router.get("/products/categories",getAllUniqueCategories)

module.exports=router;
