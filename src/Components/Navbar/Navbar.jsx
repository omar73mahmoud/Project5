import React from 'react'
import { Link } from 'react-router-dom';
import Actors from './../Actors/Actors';

export default function Navbar({loginData, logOut}) {
  return (<>
  
  <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bolder fs-3" to="home">Noxe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      {loginData? <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4 fs-5">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="movies">Movies</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="Actors">Actors</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Tvshows">TvShows</Link>
        </li>
       
    
   </ul>:""}
     




   <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
{loginData? <h5 className='mx-2 me-3 mt-2'> {loginData.first_name+" " +loginData.last_name}</h5>:""}
   <li className="nav-item me-3 d-flex align-items-center">
 <a href='https://www.facebook.com/' >   <i className="fa-brands mx-2 fa-facebook-f text-light"></i></a>
 <a href='https://www.instagram.com/'>   <i className="fa-brands mx-2  fa-instagram text-light"></i></a>
  <a href='https://twitter.com/home'>   <i className="fa-brands mx-2  fa-twitter text-light"></i></a>
<a href='https://open.spotify.com/'>   <i className="fa-brands  mx-2  fa-spotify text-light"></i> </a>
        </li>

        {!loginData ? <>  <li className="nav-item">

<Link className="nav-link active" aria-current="register" to="register">Register</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="login">Login</Link>
</li></>: <li className="nav-item">
          <a className="logout nav-link"  onClick={logOut}>Logout</a>
        </li>
      
      }
      
       
    
   </ul>



  </div>


  </div>
</nav>
  
  
  </>
 
  )
}
