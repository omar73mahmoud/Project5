import axios from 'axios';
import React, { useEffect ,useState,useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { MediaContext } from '../MediaContext/MediaContext';


export default function Movies() {
  let baseImgeUrl="https://image.tmdb.org/t/p/original/";
  let  {trendingMovies}=useContext(MediaContext);

 
  let navigate=useNavigate();
  function goToDetails(id){
    navigate({
      pathname:'/details',
      search:`?id=${id}`,
      
    })
  }
  
  return <>
  
  <div className=' row mt-5 my-3 gy-3'>
<div className=" col-lg-4 ">
  <div className="bdrd w-25"></div>
  <h2 className="text-danger fw-bold mt-3">Trending</h2>
  <h3 className="text-danger fw-bold">Movies</h3>
  <h4 className="text-danger fw-bold">To Watching Now</h4>
  <p className='text-Light mb-3'>Lorem ipsum dolor sit amet.</p>
  <div className="bdrd w-100"></div>
  </div>
 {trendingMovies.length>0 ? trendingMovies.map((movie)=>
<  div     onClick={()=>goToDetails(movie.id)}    className="trendingmovies col-md-2">
<img src={baseImgeUrl+movie.poster_path} className="w-100 cursor-pointer" alt=''/>
<h5>{movie.title}</h5>
  </div>

):<i className='fas fa-spinner fa-spin fa-3x text-center text-light'></i>}
    
    </div>

  
  </>
}
