import React, { useState } from 'react'
import Header from '../components/header'
import group12 from '../images/group12.svg'
import './reg.css'
import { FiUser } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import lwo from '../images/lwo.png'
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import Footer from '../components/footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
import link from './link';
import axios from 'axios'
export default function reg() {
  const nav=useNavigate()
   const[username,setusername]=useState('')
   const[email,setemail]=useState('')
   const[password,setpassword]=useState('')

   async function sub(){
     const response=await axios.post(link+'/api/auth/signup',{username:username,email:email,password:password})
     const {message,userdetail}=response.data
     if(message=='f'){
       toast.error('Username already exists')
     }
     else{
        localStorage.setItem('userdetail',JSON.stringify(userdetail))
        nav('/')

     }

   }

  return (
    <>
        <ToastContainer />
    <Header/>
    <div className='reg'>
        <img src={group12}/>
      
        <div className='inputs'>

            <input type='text' placeholder='Username' value={username} onChange={(e)=>setusername(e.target.value)}></input>
            <input type='text' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}></input>
            <input type='password' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}></input>
        </div>
       

    </div>
    <div className='userimg'>
      <div className='ui'>
      <FiUser/>
      </div>
  

    </div>
    <div className='emailimg'>
    <div className='ei'>
      <FiUser/>
      </div>
    

    </div>
    <div className='lockimg'>
    <div className='li'>
    <MdLockOutline />
      </div>
    

    </div>
    <div className='sb'>
      <button className='next' onClick={sub}>NEXT</button>
    </div>
    <div className='lwo'>
      <img src={lwo}></img>
    </div>
    <div className='gb'>
      <button style={{fontWeight:'700'}} className='logingoogle'>Login with google</button>
    </div>
    <div className='fb'>
      <button style={{fontWeight:'700'}} className='logingoogle'>Login with facebook</button>
    </div>
    <div className='gbi'>
      <div className='gi'></div>
      <FcGoogle/>

    </div>
    <div className='fbi'>
      <div className='fi'>
        <ImFacebook2/>

      </div>
      
      </div>
      <Footer/>
  
         
        
        
          
       
        
          
      
    </>
  )
}
