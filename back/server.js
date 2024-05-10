const express=require('express')
require('dotenv').config()
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())
const mongoose=require('mongoose')
const router=require('./routes/userroute')
app.use('/api/auth',router)

mongoose.connect(process.env.DB_CONN).then(()=>{
    console.log('db connected')
    app.listen(process.env.PORT,()=>console.log(`${process.env.PORT} running`))
})
