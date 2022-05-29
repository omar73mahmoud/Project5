import React, { useEffect,useState  } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import axios from 'axios'

export default function Details() {
    let baseImgeUrl="https://image.tmdb.org/t/p/original/";
  let  [searchPram,setSearchPram]=useSearchParams()
  let [details,setDetails]=useState({})

  let currentId=searchPram.get("id")
 async function getDetails(){
     let {data}=await axios.get(`https://api.themoviedb.org/3/movie/${currentId}?api_key=a9d72ab0cc2b972311c3b794cfaeff47&language=en-US`);
     setDetails(data);
    
 

 }

 useEffect(()=>{
getDetails()


 },[])

  return<>
 
   <div className="detailmoviecontainer row mt-5">
    <div className="imgcol col-lg-6 ">
<img src={baseImgeUrl+details.poster_path} className="w-75 mt-5 " alt="" />



    </div>
<div className="detailinfo col-lg-6 mt-5 ">
<h2 className='moviename fw-bold fs-1  mt-5 text-decoration-underline '>Movie Name: {details.original_title}</h2>

    
    <h4 className='productionyear mt-5'>Year Of Production:{details.release_date}</h4>
<h4 className='detailverview mt-5  '>Overview:  {details.overview}</h4>
</div>

    </div>

 



  </>
}
