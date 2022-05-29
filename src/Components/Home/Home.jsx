import axios from 'axios';
import React, { useEffect } from 'react'
import { useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { MediaContext } from '../MediaContext/MediaContext';



 
export default function Home() {

  let baseImgeUrl="https://image.tmdb.org/t/p/original/";

 let  {trendingMovies}=useContext(MediaContext);
 let {trendingtvshow}=useContext(MediaContext);
 let {trendingpepole }=useContext(MediaContext);


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
 {trendingMovies.length&&trendingpepole.length&&trendingtvshow.length>0 ? trendingMovies.map((movie,index)=>
<div onClick={()=>goToDetails(movie.id)} className="trendingmovies col-md-2" key={index} >
<img src={baseImgeUrl+movie.poster_path} className="w-100 cursor-pointer" alt=''/>
<h5>{movie.title}</h5>
  </div>

):<i className='fas fa-spinner fa-spin fa-3x text-center text-light'></i>}
    
    </div>

<div className='row mt-5 gy-5 my-3'>

<div className="col-lg-4">
<div className="bdrd w-25"></div>
  <h2 className="text-danger fw-bolder mt-3">Trending</h2>
  <h3 className="text-danger fw-bolder">Tv Shows</h3>
  <h4 className="text-danger fw-bolder">To Watching Now</h4>
  <p className='mb-3'>Lorem ipsum dolor sit amet.</p>
  <div className="bdrd w-100"></div>
  </div>
 {trendingMovies.length&&trendingpepole.length&&trendingtvshow.length>0 ? trendingtvshow.map((tv)=>
<div className="trindingtvshow col-md-2 gy-3">
<img src={baseImgeUrl+tv.poster_path} className="w-100 " alt=''/>
<h5>{tv.name}</h5>
  </div>

):<i className='fas fa-spinner fa-spin fa-3x text-center text-light'></i>}
    
    </div>




    <div className='row mt-5 gy-5 my-3'>
<div className="col-lg-4">
<div className="bdrd w-25"></div>
  <h2 className="text-danger fw-bold mt-3">Trending</h2>
  <h3  className="text-danger fw-bold">Person</h3>
  <h4 className="text-danger fw-bold">To Watching Now</h4>
  <p className='mb-3'>Lorem ipsum dolor sit amet.</p>
  <div className="bdrd w-100"></div>
  </div>
 {trendingMovies.length&&trendingpepole.length&&trendingtvshow.length>0 ?  trendingpepole.map((person)=>
<div className="trindingperson col-md-2 gy-3">
<img src={baseImgeUrl+person.profile_path} className="w-100 cursor-pointer" alt=''/>
<h5>{person.name}</h5>
  </div>

):<i className='fas fa-spinner fa-spin fa-3x text-center text-light'></i>}

    
 </div>

    

   
  </>
}
