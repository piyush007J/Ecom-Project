var express=require("express");
var router =express.Router()
const{check,validationResult}=require("express-validator")
const {signout,signup,signin,isSignIn}= require("../controllers/auth")


router.post("/signup",[check("name","name should be atleast 5 char").isLength({min:5}),
                        check("email","email is required").isEmail(),
                        check("password","password should be atleast 3 char").isLength({min:5})],signup);

router.post("/signin",
[
check("email","email is required").isEmail(),
check("password","password fired is required").isLength({min:5})],signin);


router.get("/signout",signout)
router.get("/testroute",isSignIn,(req,res)=>{
    res.json(req.auth);
})

module.exports=router;