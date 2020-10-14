import React from 'react';
import ReactDOM from 'react-dom';
import ParticleComponent from './particles';
import Event from './event';
import Footer from './footer';
import Gallery from './gallery';
import '../../../public/css/membersArea.css';
function Example() {
    return (
        <div className="first">
        <div className="fullscreen">
            <ParticleComponent/>
        </div>
        <div className="fullscreen">
            <Gallery />
        </div>
        <div className="fullscreen">
           <Event />
           <Footer />
        </div>
    </div>
    );
}

export default Example;


    ReactDOM.render(<Example />, document.getElementById('example'));

