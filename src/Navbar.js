import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
 function Navbar() {
     const [state,setState]=useState(false);
     
    return (<>
    <section className="navbar-bg">
    <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container">
    <img src="https://www.virginiadefamationlawyer.com/wp-content/uploads/sites/53/2015/10/AP-logo.png" height="100rem"/>
     <h1> Anipay</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
    onClick={()=>setState(!state)}
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${state? "show" :""}`}>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/service">Service</NavLink>
        </li>
        
        <li class="nav-item">
          <NavLink class="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/about">About us</NavLink>
        </li>
        
      </ul>
      <form class="d-flex">
        <button class="btn btn-style" type="submit">Sign Up</button>
        
        <button class="btn btn-style btn-style-border" type="submit">Log in</button>
      </form>
    </div>
  </div>
</nav></section>
    </>
    )
}
export default Navbar;