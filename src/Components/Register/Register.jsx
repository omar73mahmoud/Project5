import React , {useState} from 'react'

import axios from 'axios';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';
export default function () {

  
  const [errorlist,setErrorList] = useState([])
  let navigate=useNavigate();
  const [isloading, setLoading] = useState(false)
  const [error, seteError] = useState("")
    const [user, setUser] = useState(
        {
            first_name:"",
            last_name:"",
            age:0,
            email:"",  
            password:""
        }
    );


    function getuser(e){
        let myuser={ ...user};
        //de hatbaa fe awl mra first_name bad keda last_name
        myuser[e.target.name]=e.target.value;
        setUser(myuser);
       // console.log(user);
      
    }


 async function submitregister(e){

    e.preventDefault();



    let valdationresut=validateRegisterForm(user)
    if(valdationresut.error){
      setLoading(true);

setErrorList(valdationresut.error.details)




    }
    else{
      setLoading(true);
      let {data}=await axios.post(`https://route-egypt-api.herokuapp.com/signup`,user);
     if( data.message=="success"){
      setLoading(false);

      navigate("/login")


     }
     else{
  
     }
     seteError(data.message);
     setLoading(false);
  }
    }

    

function validateRegisterForm(user){

  let schema=Joi.object({
first_name:Joi.string().alphanum().min(3).max(9).required(),
last_name:Joi.string().alphanum().min(3).max(9).required(),
age: Joi.number().min(16).max(100).required(),
email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
password: Joi.string().pattern(/[0-9]/),


  })

  return schema.validate(user ,{abortEarly:false});
}


  return (<>




  <h2 className='mb-5 my-3'> Register Now</h2>

{errorlist.map((error,index)=><div key={index} className='alert alert-danger'>{error.message}</div>)}
{error? <div className='alert alert-danger'>{error}</div>:""}
  
<form className='py-4' onSubmit={submitregister}>
  <label htmlFor='first_name'>First_name:</label>
  <input onChange={getuser} type="text" className='form-control  my-3'  name='first_name' id='first_name'/>
  

  <label htmlFor='last_name'>last_name:</label>
  <input  onChange={getuser}  type="text" className='form-control  my-3'  name='last_name' id='last_name'/>

  <label htmlFor='age'>Age:</label>
  <input   onChange={getuser} type="number" className='form-control  my-3'  name='age' id='age'/>

  <label htmlFor='email'>Email:</label>
  <input    onChange={getuser} type="email" className='form-control  my-3'  name='email' id='email'/>

  <label htmlFor='password'>Password:</label>
  <input    onChange={getuser} type="password" className='form-control  my-3'  name='password' id='password'/>
  

{error?<div className=" alert alert-danger">{error}</div>:""}


  <button className='btn btn-outline-primary'> {isloading?<i className='fas fa-spinner fa-spin'></i>:"register"}</button>

 
  
  
  </form>
  
  
  
  
  
  </>
  



    
  )
}

