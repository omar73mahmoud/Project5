import { createContext } from 'react';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

export let MediaContext=createContext([]) ;





 export function MediaContextProvider(props){
    
  let [trendingMovies,setTrandingMovies]=useState([])
  let [trendingtvshow,setTrendingTvShows]=useState([])
  let [trendingpepole,setTrendingPepole]=useState([])
  
 
   async function getTrindingitems(mediatype,callback){ 
 
   let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=a9d72ab0cc2b972311c3b794cfaeff47`);
 callback(data.results);
   
 }
 
 useEffect(()=>{
   getTrindingitems("movie",setTrandingMovies);
   getTrindingitems("tv",setTrendingTvShows);
   getTrindingitems("person",setTrendingPepole);
 },[]);

return <MediaContext.Provider value={{trendingMovies,trendingtvshow,trendingpepole}}>

{props.children}
</MediaContext.Provider>

}