
import axios from 'axios';
import React, { useState, useEffect ,useContext} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Fotter from '../Fotter/Fotter';
import { MediaContext } from '../MediaContext/MediaContext';
export default function Actors() {

    let baseImgeUrl="https://image.tmdb.org/t/p/original/";
    let {trendingpepole }=useContext(MediaContext);
    
      let navigate=useNavigate();
      function goToDetailsperson(id){
        navigate({
          pathname:'/pepoledetai',
          search:`?id=${id}`,
          
        })
      }
      


  return <>
  
  <div className='row mt-5 gy-5 my-3'>
<div className="col-lg-4">
<div className="bdrd w-25"></div>
  <h2 className="text-danger fw-bold mt-3">Trending</h2>
  <h3  className="text-danger fw-bold">Person</h3>
  <h4 className="text-danger fw-bold">To Watching Now</h4>
  <p className='mb-3'>Lorem ipsum dolor sit amet.</p>
  <div className="bdrd w-100"></div>
  </div>
 {trendingpepole.length>0 ?trendingpepole.map((person)=>
<div   onClick={()=>goToDetailsperson(person.id)}  className="trindingperson col-md-2 gy-3">
<img src={baseImgeUrl+person.profile_path} className="w-100 cursor-pointer" alt=''/>
<h5>{person.name}</h5>
  </div>

):<i className='fas fa-spinner fa-spin fa-3x text-center text-light'></i>}
    
    </div>
  
  
   <Fotter/>
  
  
  
  
  </>
}
