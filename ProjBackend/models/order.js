const mangoose=require("mongoose")
const{ObjectId}=mangoose.Schema;
const ProductCartSchema=new mangoose.Schema({
    product:{
        type:ObjectId,
        ref:"Product"
    },
    name:String,
    count:Number,
    price:Number
})
const ProductCart= mangoose.model("ProductCart",ProductCartSchema)



const OrderSchema= new mangoose.Schema({
    products:[ProductCartSchema],
    transaction_id:{},
    amount:{type:Number},
    address:{type:String},
    status:{
        type : String,
        default:"Recieved",
        enum: ["cancelled","Delivered","Shipped","Processing","Recieved"]
    },
    update:Date,
    user:{
        type: ObjectId,
        ref:"User"
    }
},{timestamps:true})

const Order= mangoose.model("Order",OrderSchema)

module.exports={Order,ProductCart}