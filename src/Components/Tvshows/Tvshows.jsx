import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { MediaContext } from '../MediaContext/MediaContext';
import { Navigate, useNavigate } from 'react-router-dom';


export default function Tvshows() {
    let baseImgeUrl="https://image.tmdb.org/t/p/original/";
    let {trendingtvshow}=useContext(MediaContext);
  let navigate=useNavigate();
      function goToDetailsTvshows(id){
        navigate({
          pathname:'/Tvshowsdetail',
          search:`?id=${id}`,
          
        })
      }

  return (
    <div className='row mt-5 gy-5 my-3'>

    <div className="col-lg-4">
    <div className="bdrd w-25"></div>
      <h2 className="text-danger fw-bolder mt-3">Trending</h2>
      <h3 className="text-danger fw-bolder">Tv Shows</h3>
      <h4 className="text-danger fw-bolder">To Watching Now</h4>
      <p className='mb-3'>Lorem ipsum dolor sit amet.</p>
      <div className="bdrd w-100"></div>
      </div>
     {trendingtvshow.length>0 ? trendingtvshow.map((tv)=>
    <div  onClick={()=>goToDetailsTvshows(tv.id)} className="trindingtvshow col-md-2 gy-3">
    <img src={baseImgeUrl+tv.poster_path} className="w-100 " alt=''/>
    <h5>{tv.name}</h5>
      </div>
    
    ):<i className='fas fa-spinner fa-spin fa-3x text-center text-light'></i>}
        
        </div>
    
    
    
  )
}
