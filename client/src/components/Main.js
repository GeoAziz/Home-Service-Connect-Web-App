//Main.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';

function Main() {
  return (
    <div id="home" className="main-background">
      <section className="container1" >
        <div className="container-fluid main-container">
          <div className="row" >
            <div className="col-md-5" data-aos="fade-right" data-aos-duration="2000"><br/>
              <h1><b>Welcome to PoaFix</b></h1><br/><br/>
              <h5><i>Your Trusted Gateway to trusted SErvices.</i></h5>
              <p>Discover the perfect service provider for your needs with ease and confidence. At ConnectPro, we bridge the gap between clients and skilled professionals across various industries</p>
             <br/><br/>
              <button type="button" className="btn btn-dark">Chat with us on Whatsapp</button><br/><br/>
            </div>
            <div className="col-md-7 text-center">
            <div className="image-container">
              <img className="img-responsive rounded" src="/images/main.png" alt="Main" data-aos="fade-up" data-aos-duration="2000" />
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;