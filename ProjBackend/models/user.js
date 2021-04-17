var mongoose = require("mongoose");
var crypto= require("crypto");
var uuidv1=require("uuid/v1");
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },
   lastname:{
        type:String,
        required:false,
        trim:true
   },
   email:{
       type:String,
       required:true,
       trim:true,
       unique:true
   },
   userinfo:{
       type:String,
       trim:true
   },
   
   encry_password:{
       type:String,
       required:true
   },
   salt:String,
   role:{
       type:Number,
       default:0
   },
   purchases:{
       type:Array,
       default:[]
   }
}
,{timestamps:true}
);
userSchema.virtual("password")
    .set(function(password){
        this._password=password
        this.salt=uuidv1();
        this.encry_password=this.securePassword(password);
    })
    .get(function(){
        this._password
    })

userSchema.methods = {
    autheticate: function(planpassword){
        return this.securePassword(planpassword)===this.encry_password
    },

    securePassword:function(planpassword){
        if(!planpassword) return "";
        try{
            return crypto.createHmac('sha256',this.salt)
            .update(planpassword)
            .digest('hex');
        }catch(err){
            return "";
        }
    }
}
module.exports=mongoose.model("User",userSchema)