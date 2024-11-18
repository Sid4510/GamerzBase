
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    Username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    events :{
        type :[{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
    }
})

const userModel=mongoose.model("User",userSchema);

module.exports=userModel;