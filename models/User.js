

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{type:String, required:true, unique:true},
    password:{type:String, require:true},
    savedRecipes: [{type: mongoose.Schema.Types.ObjectId, ref:"Recipe"}]
})

const UserModel = mongoose.model("user", UserSchema)
module.exports= UserModel;