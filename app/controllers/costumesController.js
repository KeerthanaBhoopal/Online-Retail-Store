const Costume=require('../models/costume')

module.exports.list=(req,res)=>{/// empty object so use list method
    Costume.find().populate('category',['_id','name'])
    .then((coss)=>{
        res.json(coss)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{//getting specific data
        const id=req.params.id
        Costume.findOne({_id:id}).populate('category',['_id','name'])
        // cos.findById(id).populate('category',['_id','name'])
        .then((cos)=>{//cos present or not will be checked in this .then..if not present else {}..it will resolve
            if(cos){
                res.json(cos)
            }else{
                res.json({})//cos will be null--cos is not empty object
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.create=(req,res)=>{
    //console.log(req.file)//step 3..we get req.file and req.body with multer--see in console

     const body=req.body
    // console.log(body)//from model 
    
    //step 5--we cant get the url from multer..so how to get??..we have path property--
    //body.cosImage=req.file.path//storing path--?body.cosImage
    //console.log(body)
    
    //creatig the object by the constructor of the coss
    const cos=new Costume(body)
    cos.user= req.user._id
    //saving into the mongodb by save() method
    cos.save()//instance method 
    .then((cos)=>{
        res.json(cos)
    })
    .catch((err)=>{
        res.json(err)
    })

}
module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Costume.findOneAndUpdate({_id:id, user:req.user._id}, body , { new:true, runValidators: true })
    .then((cos)=>{
        if(cos){
            res.json(cos)
        }else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })

}
module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Costume.findOneAndDelete({_id:id}) //, user:req.user.id
    .then((cos)=>{
        //console.log('cos',cos)
    if(cos){///promise will resolve.if we try to get the deleted data..we will get {}
      res.json(cos)
    }else{
        res.json({})
    }
})
.catch((err)=>{
    res.json(err)
})
}

