const express=require('express')
const router=express()
const usercontroller=require('../controller/usercontroller')

router.post('/signup',usercontroller.signup)
router.post('/login',usercontroller.login)

module.exports=router
