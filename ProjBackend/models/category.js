const mangoose = require("mongoose")

const categorySchema = new mangoose.Schema({
    name:{
        type:String,
        trim: true,
        required:true,
        maxlength:32,
        unique:true
    }
},{timestamps: true})

module.exports=mangoose.model("Category",categorySchema);