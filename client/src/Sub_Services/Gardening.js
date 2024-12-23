import React, { useEffect, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubNavbar from '../components/SubNavbar.js';
import Footer from '../components/Footer.js';

// Lazy load the new service pages
const GardenInstallationAndPlanning = lazy(() => import('./Gardening/GardenInstallattionAndPlanning.js'));
const GardenLightingInstallation = lazy(() => import('./Gardening/GardenLightingInstallation.js'));
const GardenMaintenance = lazy(() => import('./Gardening/GardenMaintenance.js'));
const MosquitoControl = lazy(() => import('./Gardening/MosquitoControl.js'));
const TreeCareAndArboriculture = lazy(() => import('./Gardening/TreeCareAndArboricuture.js'));
const WildlifeControl = lazy(() => import('./Gardening/wildLifeControl.js'));

function Gardening() {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SubNavbar />
      <div id="services">
        <div className="container">
          <br/>
          <br/>
          <h1 className='text-center'><b>Welcome to Gardening</b></h1>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/gardening/garden-installation" className="text-decoration-none text-dark">
                <div className="p_10 text-center ">
                  <img src="/images/flowers.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Garden Installation'/>
                  <div className="repair text-center"><b>Garden Installation and Planting</b></div>
                  <div className="maintenance text-center">Implementing landscape designs by installing plants, trees, shrubs, and other greenery.</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/gardening/garden-maintenance" className="text-decoration-none text-dark">
                <div className="p_10 text-center ">
                  <img src="/images/gardening.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Garden Maintenance'/>
                  <div className="repair text-center"><b>Garden Maintenance Services</b></div>
                  <div className="maintenance text-center">Regular upkeep of gardens, including weeding, pruning, and fertilizing.</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/gardening/mosquito-control" className="text-decoration-none text-dark">
                <div className="p_10 text-center ">
                  <img src="/images/mosquito.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Mosquito Control'/>
                  <div className="repair text-center"><b>Mosquito Control</b></div>
                  <div className="maintenance text-center">PoaFix helps Larvicide treatments for standing water.</div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/gardening/garden-lighting" className="text-decoration-none text-dark">
                <div className="p_10 text-center ">
                  <img src="/images/street-light.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Garden Lighting'/>
                  <div className="repair text-center"><b>Garden Lighting Installation</b></div>
                  <div className="maintenance text-center">Installing outdoor lighting for gardens and landscapes.</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/gardening/wildlife-control" className="text-decoration-none text-dark">
                <div className="p_10 text-center ">
                  <img src="/images/snail.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Wildlife Control'/>
                  <div className="repair text-center"><b>Wildlife Control</b></div>
                  <div className="maintenance text-center">Humane removal of wildlife such as raccoons, squirrels, and birds.</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4  col-md-4 col-sm-4 text-center" data-aos="fade-left" data-aos-duration="2000">
              <Link to="/gardening/tree-care" className="text-decoration-none text-dark">
                <div className="p_10 text-center ">
                  <img src="/images/palm-tree.png" height="100rem" width="100rem" className="img-responsiv images_padding" alt='Tree Care'/>
                  <div className="repair text-center"><b>Tree Care and Arboriculture</b></div>
                  <div className="maintenance text-center">Pruning, trimming, and shaping trees for optimal growth.</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Gardening;