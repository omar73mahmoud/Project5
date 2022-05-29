import React , {useState} from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
import Fotter from './../Fotter/Fotter';
export default function Login ( {setUserData}) {

  
  const [errorlist,setErrorList] = useState([])
  let navigate=useNavigate();

  const [isloading, setLoading] = useState(false)
  const [error, seteError] = useState("")
    const [user, setUser] = useState(
        {
        
            email:"",
            password:""
        }
    );


    function getuser(e){
        let myuser={ ...user};
        myuser[e.target.name]=e.target.value;
        setUser(myuser);
       // console.log(user);
      
    }


 async function submitLogin(e){

    e.preventDefault();



    let valdationresut=validateLoginForm(user)
    if(valdationresut.error){
      setLoading(true);

setErrorList(valdationresut.error.details)




    }
    else{
      setLoading(true);
      let {data}=await axios.post(`https://route-egypt-api.herokuapp.com/signin`,user);
     if( data.message=="success"){

localStorage.setItem("token",data.token)
setUserData( )

      setLoading(false); 
      navigate("/home")
     }
    
     seteError(data.message);
     setLoading(false);
  }
    }

    

function validateLoginForm(user){

  let schema=Joi.object({

email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
password: Joi.string().pattern(/[0-9]/),


  })

  return schema.validate(user ,{abortEarly:false});
}


  return (<>




  <h2 className='mb-5 my-3'> Login Now</h2>

{errorlist.map((error,index)=><div key={index} className='alert alert-danger'>{error.message}</div>)}
{error? <div className='alert alert-danger'>{error}</div>:""}
  
<form className='py-4' onSubmit={submitLogin}>
 
  <label htmlFor='email'>Email:</label>
  <input    onChange={getuser} type="email" className='form-control  my-3'  name='email' id='email'/>

  <label htmlFor='password'>Password:</label>
  <input    onChange={getuser} type="password" className='form-control  my-3'  name='password' id='password'/>
  

{error?<div className=" alert alert-danger">{error}</div>:""}


  <button className='btn btn-outline-primary'> {isloading?<i className='fas fa-spinner fa-spin'></i>:"Login"}</button>

 
  
  
  </form>
  
 
  
  
  
  </>
  



    
  )
}

