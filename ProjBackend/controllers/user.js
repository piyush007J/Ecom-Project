const User =require("../models/user")
const order =require("../models/order")


exports.getUserById=(req,res,next,id)=>{
    User.findById(id).exec((err,user)=>{
        if(err || !user){
            return res.status(400).json({
                error:"No user found"
            })
        }
        req.profile=user;
        next();
    });
}

exports.getUser=(req,res)=>
{
    //get back here for password
    req.profile.salt=undefined;
    req.profile.encry_password=undefined;
    return res.json(req.profile);
}


exports.updateUser = (req,res) =>  {
    User.findByIdAndUpdate(
        {_id : req.profile._id},
        {$set: req.body},
        {new:true, useFindAndModify : false},
        (err,user)=>{
            if(err){
                return res.status(400).json({
                    error:"You are not authorised to update this user"
                })
            }
            user.salt=undefined;
            user.encry_password=undefined;
            res.json(user)
        }
    )
}

exports.userPurchesList=(req,res)=>{
    orders.find({user:req.profile._id}).
    populate("user","_id name")
    .exec((err,order)=>
    {
        if(err){
            return res.status(400).json({
                error:"No Order in this account"
            })
        }
        return res.json(order)
    });
}


exports.pushOrderInPurchesList=(req,res,next)=>{
    let purchases= []
    req.body.order.products.forEach(product => {
        purchases.push({
            _id:product._id,
            name:product.name,
            description: product.description,
            category:product.category,
            quantity:product.quantity,
            amount:req.body.order.amount,
            transection_id:req.body.order.transection_id
        });
    }) ;

    //store this is DB
    User.findOneAndUpdate(
        {_id:req.profile._id},
        {$push:{purchases:purchases}},
        {new:true},//this new will send me back the updated document
        (err, purchases)=>{
            if(err){
                return res.status(400).json({
                    error:"Unable to save the purches list"
                })
            }
            next();
        }
    )

};