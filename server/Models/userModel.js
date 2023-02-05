import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    favorites: Array,
    email: String,
    password: String,
    mobile:String,
    orderHistory:Array,
    address:String
})



const User = mongoose.model('User',userSchema)
export default User