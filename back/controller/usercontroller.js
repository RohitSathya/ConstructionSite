const usermodel=require('../models/user')

const signup=async(req,res)=>{
    const {username,email}=req.body
    const find=await usermodel.find({username:username,email:email})
    if(find=='' || !find){
        const data=await usermodel.create(req.body)
        res.json({userdetail:data})
        console.log(data)

    }
    else{
        res.json({message:'f'})
    }
    
}
const login=async(req,res)=>{
    const data=await usermodel.findOne(req.body)
    if(!data || data==''){
        res.json({message:'f'})
    }
    else{
        res.json({userdetail:data})
    }

}
module.exports={signup,login}