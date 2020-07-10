import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import banner from '../images/banner.png'
import unblockwebsite from '../images/unblock-website.png'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="carousel-area">
        <div id="carousel-slider" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src={banner} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div> 

      <section id="unblock-websites">
        <div className="container">
            <div className="row">
                <div className="col-md-6 order-md-1">
                    <img src={unblockwebsite} className="img-fluid" alt="" />
                </div>
                <div className="col-md-6 order-md-2 pl-5">
                    <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
                    <h1>Unblock Websites</h1>
                    <p>
                        RitaVPN helps you to unblock websites in your network from around the globe. Provides unrestricted access to the web by allowing you to unblock websites. Get access to your favorite websites and content like Facebook, Twitter, and Pinterest that be blocked in your country from anywhere and anytime.
                    </p>
                    <p>&nbsp;</p>
                    <a href="http://localhost:8000" className="btn btn-primary">Get RitaVPN</a>
                </div>
            </div>
        </div>  
    </section>

    
  </Layout>
)

export default IndexPage
