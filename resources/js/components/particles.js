import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Background from '../../../public/images/lightbluegrad.jpg';



class ParticleComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
    //  document.getElementById("overlay").style.display = "block";
  
  }
  
  render() {
      return (
  <div id="overlay" >
    <Particles className="particles"
      params={{
       "particles": {
           "number": {
               "value": 150
           },
           "size": {
               "value": 4
           }
       },
       "interactivity": {
           "events": {
               "onhover": {
                   "enable": true,
                   "mode": "repulse"
               }
           }
       }
   }}
   style={{
     position: "absolute",
     top: "0",
     left: "0",
     width: "100%",
     height: "100%",
     backgroundImage: `url(${Background})`,
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover"

     
   }}/>

     
    <div className="jumbotron text-center">
    
          <div className="welcome" style={{position: "absolute",
  left:" 50%",
  top: " 50%",
  transform: "translate(-50%, -50%)"}}>
              
        <h1 className="display-4">Welcome To The Gallery For Creatives</h1>
        <p className="lead">View PPAC Student's Artwork</p>


        <a className="btn btn-primary btn-lg mt-3" href="#ue" role="button">View Gallery</a>
        </div>
        
    </div>
   
    </div>
    
      );
    }
  }
  
  export default ParticleComponent;
  