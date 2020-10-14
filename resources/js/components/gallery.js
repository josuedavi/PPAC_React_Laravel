import React, {Component} from 'react';
import Park from '../../../public/images/park.jpg';
import Bridge from '../../../public/images/bridge.jpg';
import Tunnel from '../../../public/images/tunnel.jpg';
import Coast from '../../../public/images/coast.jpg';
import Rails from '../../../public/images/rails.jpg';
import Traffic from '../../../public/images/traffic.jpg';
import '../../../public/css/gallery.css';
 

export default class Gallery extends Component {
    render() {
        return (
     
                 <div className="container gallery-container mh-0">

   
                
            <h1 id="ue" style={{textAlign: "center"}}>Creative Gallery</h1>

            <p id="click" className="page-description text-center">Click On Images To Enlarge</p>
            <div className="tz-gallery mh-0">
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <a className="lightbox" href={Park}>
                            <img src={Park} alt="Park" />
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <a className="lightbox" href={Bridge}>
                            <img src={Bridge} alt="Bridge" />
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <a className="lightbox" href={Tunnel}>
                            <img src={Tunnel} alt="Tunnel" />
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <a className="lightbox" href={Coast}>
                            <img src={Coast} alt="Coast" />
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <a className="lightbox" href={Rails}>
                            <img src={Rails} alt="Rails" />
                        </a>
                    </div>
                    <div className="col-sm-6 col-md-4">
                        <a className="lightbox" href={Traffic}>
                            <img src={Traffic} alt="Traffic" />
                        </a>
                    </div>
                   
                    </div>
                </div>
        
            </div>
        
      
             
        );
    }
}



