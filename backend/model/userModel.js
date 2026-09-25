const mongoose=require('mongoose')
const usermodel=new mongoose.Schema({
    Full_Name:{type:String,required:true},
    Last_Name:{type:String,required:true},
    Email:{type:String,required:true},
    Password:{type:String,required:true}
},{timestamps:true})
module.exports=mongoose.model('auth',usermodel)