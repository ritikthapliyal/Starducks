import express from 'express'
import {addUser,verifyUser,updateCart} from '../controllers/user.js'

const user = express.Router();

user.post('/',addUser)
user.patch('/',updateCart)
user.post('/verify',verifyUser)

export default user