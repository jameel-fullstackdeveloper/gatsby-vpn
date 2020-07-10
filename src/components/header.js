import React from "react"
import { Link } from "gatsby"

import logo from '../images/logo.png'

const Header = () => {
  
  return (
    <header  id="slider-area">  
       <nav className="navbar navbar-expand-md scrolling-navbar bg-dark">
        <div className="container-fluid">          
          <Link className="navbar-brand" to="/">
                <img src={logo} className="img-fluid" alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <i className="lni-menu"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item">
                <Link className="nav-link" to="features">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="price">Price</Link>
              </li>  
              <li className="nav-item">
                <Link className="nav-link" to="vpnapps">VPN Apps</Link>
              </li>                            
              <li className="nav-item">
                <Link className="nav-link" to="help">Help</Link>
              </li>            
            </ul>              
          </div>
        </div>
      </nav> 
     
    </header>
  )
  }


export default Header
