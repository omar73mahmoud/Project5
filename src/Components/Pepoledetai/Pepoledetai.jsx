import React, { useEffect,useState  } from 'react'
import { useSearchParams } from 'react-router-dom'

import axios from 'axios'

export default function Pepoledetai() {

    let baseImgeUrl="https://image.tmdb.org/t/p/original/";
    let  [searchPram,setSearchPram]=useSearchParams()
    let [detailsperson,setDetailsPerson]=useState({})

    let currentId=searchPram.get("id")
    async function getDetailsperson(){
        let {data}=await axios.get(`https://api.themoviedb.org/3/person/${currentId}?api_key=a9d72ab0cc2b972311c3b794cfaeff47&language=en-US`);
    setDetailsPerson(data);
    
   
    }
    useEffect(()=>{
        getDetailsperson();
        
        
         },[])

  return (
   
       <div className="row">
<div className=" pepoleimg  col-lg-6 ">
<img src={baseImgeUrl+detailsperson.profile_path} className="w-75 mt-5" alt="" />
</div>
<div className="col-lg-6 mt-5">
<h2 className='pepolename fw-bold fs-1  mt-5 text-decoration-underline'>Name: {detailsperson.name}</h2>
<h4 className='pepolebirthday mt-5'>Birthday: {detailsperson.birthday}</h4>
<p className='cvperson mt-5'>{detailsperson.biography}</p>
</div>

      
   </div>
  )
}
