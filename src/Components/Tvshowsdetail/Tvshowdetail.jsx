
import React, { useEffect,useState  } from 'react'
import { useSearchParams } from 'react-router-dom'

import axios from 'axios'

export default function Tvshowdetail() {
    let baseImgeUrl="https://image.tmdb.org/t/p/original/" ;
    let  [searchPram,setSearchPram]=useSearchParams()
    let [detailsTvshows,setDetailsTvShows]=useState({})

    let currentId=searchPram.get("id") ;
    async function GetTvShows(){
        let {data}=await axios.get(`https://api.themoviedb.org/3/tv/${currentId}?api_key=a9d72ab0cc2b972311c3b794cfaeff47&language=en-US`);
    console.log (data);
    setDetailsTvShows(data);
    
    
    }
    useEffect(()=>{
        GetTvShows();
      
      },[]);
   
  return <>
 
      <div className="row">
          <div className="tvshowimgdetail col-lg-6 mt-5">
<img src={baseImgeUrl+detailsTvshows.poster_path} className="w-50 ml-5" alt="" />
          </div>
          <div className="col-lg-6 mt-5">
              <h2 className='fw-bold fs-1  mt-5 text-decoration-underline text-danger'>{detailsTvshows.tagline}</h2>
              <h3 className='mt-5 text-danger'>{detailsTvshows.original_name}</h3>
              <p className='tvshowoverview mt-5 '>{detailsTvshows.overview}</p>
          </div>
      </div>
 
  
  </>
}
