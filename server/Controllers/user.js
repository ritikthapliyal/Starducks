import User from '../Models/userModel.js'
import bcrypt from 'bcryptjs'


export const addUser = async (req,res) => {

    const email = req.body.username
    const mobile = req.body.mobile
    const address = req.body.address
    const password = req.body.password

    try{

        if(await User.findOne({email:email})){
            return res.status(409).json({message:"Email Exists"})
        }

        const hashPassword = await bcrypt.hash(password,12)
        
        await User.create({email,mobile,address,password:hashPassword,favorites:[],orderHistory:[]})        
        
        const user = await User.findOne({email:email},{password:0})
        console.log(user)
        return res.status(201).json({result:user})   

    }
    catch(error){
        return res.status(500).json({message:"Something Went Wrong"})
    }

}


export const verifyUser = async(req,res) => {

    const email = req.body.username
    const password = req.body.password
    

    try{
        
        let user = await User.findOne({email:email})
        if(!user){ return res.status(404).json({message:"User Not Found"})}

        const isValidPassword = bcrypt.compare(password,user.password)
        if(!isValidPassword){ return res.status(404).json({message:"Password Does Not Match"})}

        user = await User.findOne({email:email},{password:0})
        return res.status(200).json({result:user})

    }
    catch{
        return res.status(500).json({message:"Something Went Wrong"})
    }

}



export const updateCart = async (req,res)=>{

    if(req.body.bag){
        const _id = req.body._id
        const bag = req.body.bag
    
        const DateAndTime = new Date();
        
        try{
    
            await User.findOneAndUpdate({_id},{
                $push: { orderHistory : { $each : [{DateAndTime,bag}] , $position : 0}}
            })
    
            const updatedInfo = await User.findOne({_id},{password:0})
            res.status(200).json({message:updatedInfo})
        }
        catch(err){
            res.status(400).json({message:err})
        }

    }
    else{
        const _id = req.body._id
        const fav = req.body.fav
        
        
        try{
            await User.updateOne({_id},{$set:{ favorites:fav}})
    
            const updatedInfo = await User.findOne({_id},{password:0})
            res.status(200).json({message:updatedInfo})
        }
        catch(err){
            res.status(400).json({message:err})
        }
    }


}




