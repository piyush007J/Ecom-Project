const express =require("express")
const router =express.Router()
const{getCategoryById,getAllCategory,createCategory,getCategory,updateCategory,removeCategory}=require("../controllers/category")
const{isAuthenticated,isAdmin,isSignIn}=require("../controllers/auth")
const{getUserById}=require("../controllers/user")

router.param("userID",getUserById)
router.param("categoryID",getCategoryById)

router.post("/category/create/:userID",
                                    isSignIn,
                                    isAuthenticated,
                                    isAdmin,
                                    createCategory)
//read
router.get("/category/:categoryID",getCategory)
router.get("/categories",getAllCategory)

//Update
router.put("/category/:categoryID:userID",isSignIn,isAuthenticated,isAdmin,updateCategory)

//delete
router.delete("/category/:categoryID:userID",isSignIn,isAuthenticated,isAdmin,removeCategory);

module.exports = router;