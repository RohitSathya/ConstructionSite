import { useState } from 'react'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Reg from './pages/reg'
import Login from './pages/login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Buildinginfo from './components/buildinginfo'

function App() {

  const [bui,setbui]=useState({})


  function getbu(e){
    console.log(e)
    setbui(e)
    

  }
 

  return (
    <>
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home func={getbu}/>}></Route>
      <Route path='/signup' element={<Reg/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/buildinginfo' element={<Buildinginfo data={bui}/>}></Route>
   
    </Routes>
    </BrowserRouter>
    
     
    
  
    </>
  )
}

export default App
