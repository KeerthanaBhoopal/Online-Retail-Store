const mongoose=require('mongoose')

const setUpDB=()=>{
mongoose.connect('mongodb://localhost:27017/retail-store',{ useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{
    console.log('connected to db')
})
.catch((err)=>{
    console.log('error',err)
})

}
module.exports=setUpDB