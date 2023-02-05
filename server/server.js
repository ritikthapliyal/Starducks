import cors from 'cors'
import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import user from './routes/user.js'

const app = express()
app.use(cors())
app.use(bodyParser.json({limit:"30mb", extended: true }))


const PORT = process.env.PORT || 5000 

app.use('/user',user)

const CONNECTION_URL = `mongodb+srv://project-1:kickass123@cluster0.kgmw1aq.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(CONNECTION_URL).then(()=>{
    app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)})
}).catch((error)=>{console.log(error)})

