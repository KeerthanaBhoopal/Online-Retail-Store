const mongoose=require('mongoose')

const Schema=mongoose.Schema
const costumeSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:Number
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
    // cimage:{
    //     type:String,
    //     required:true
    // }

})

const Costume= mongoose.model('Costume', costumeSchema)
module.exports=Costume