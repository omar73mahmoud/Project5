import logo from './logo.svg';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Fotter from './Components/Fotter/Fotter';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Movies from './Components/Movies/Movies';
import About from './Components/About/About';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

import Notfound from './Components/Notfound/Notfound';

import { useState, useEffect } from 'react';
import  jwtDecode  from 'jwt-decode';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Actors from './Components/Actors/Actors';
import Details from './Components/Fotter/Details/Details';
import Pepoledetai from './Components/Pepoledetai/Pepoledetai';
import Tvshows from './Components/Tvshows/Tvshows';
import Tvshowdetail from './Components/Tvshowsdetail/Tvshowdetail';
import { MediaContextProvider } from './Components/MediaContext/MediaContext';


export function App() {


  let [loginData,setLoginData]=useState(null)

function setUserData(){
  let token=localStorage.getItem("token");
 let decode=jwtDecode(token);
 setLoginData(decode);
 console.log(loginData);
}
let navigate=useNavigate();
function logOut(){

localStorage.removeItem("token")
setLoginData(null);
navigate('/login')

}
useEffect(()=>{
  if(localStorage.getItem("token")){
    //setUserData()
  }
})
  return (
    <div className="App">
  <Navbar loginData={loginData}  logOut={logOut}/>

<div className='container'>
  <MediaContextProvider>
<Routes>

<Route element={<ProtectedRoute loginData={loginData} />}>

<Route path='/' element={<Home/>}/>
<Route path='home' element={<Home/>}/>
<Route path='movies' element={<Movies/>}/>

<Route path='Actors' element={<Actors/>}/>
<Route path='Tvshows' element={<Tvshows/>}/>
<Route path='details' element={<Details/>}/>
<Route path='pepoledetai'element ={<Pepoledetai/>} />
<Route path='Tvshowsdetail' element={<Tvshowdetail/>} />

  </Route>



  


  
  

  <Route path='about' element={<About/>}/>
<Route path='register' element={<Register/>}/>
<Route path='login' element={<Login setUserData={setUserData} />}/>
<Route path='*' element={<Notfound/>}/> 



</Routes>
</MediaContextProvider>
</div>




<Fotter/>
    </div>
  );
}

export default App;
