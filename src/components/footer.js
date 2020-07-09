import React from 'react'
import { Link } from "gatsby"

const Footer = () =>{

    return (
        <footer>
      <section className="footer-Content">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-4">
              <h3>DOWNLOAD CLIENT OF RITAVPN</h3>
              <div className="row">
                    <div className="col">
                        <div className="footer-windows">
                            
                        </div>
                        <div className="footer-text-small text-center">
                            Windows
                        </div>
                    </div>
                  <div className="col">
                        <div className="footer-mac">
                            
                        </div>
                        <div className="footer-text-small text-center">
                            Mac
                        </div>
                    </div>
                  <div className="col">
                        <div className="footer-ios">
                            
                        </div>
                      <div className="footer-text-small text-center">
                            iOS
                        </div>
                    </div>
                  <div className="col">
                        <div className="footer-android">
                            
                        </div>
                      <div className="footer-text-small text-center">
                            Android
                        </div>
                    </div>
                </div>
            </div>
            <div className="offset-2 col-lg-2">
              <div className="widget">
                <h3 className="block-title">SHORTCUT</h3>
                <ul className="menu">
                  <li><Link to="contact">Contact Us</Link></li>
                  <li><Link to="setup">VPN Setup Tutorial</Link></li>
                  <li><Link to="help">Help</Link></li>
                  <li><Link to="termofuse">Terms of Use</Link></li>
                  <li><Link to="aboutus">About Us</Link></li>
                </ul>
            </div>
            </div>
            <div className="col-lg-4">
              <div className="widget">
                <h3 className="block-title">FOLLOW US</h3>
                
                  <a href="https://www.facebook.com/" className="follow"> </a>
                  <a href="https://www.facebook.com/" className="follow"><i className="fab fa-twitter" aria-hidden="true">twitter</i>f</a>
                  <a href="#https://www.facebook.com/" className="follow"><i className="fab fa-instagram" aria-hidden="true">insta</i>f</a>
                  <a href="https://www.facebook.com/" className="follow"><i className="fab fa-youtube" aria-hidden="true">youtube</i>f</a>
                  
               

              </div>
            </div>
          </div>
        </div>
      </section>
    
    </footer>
    )

}


export default Footer