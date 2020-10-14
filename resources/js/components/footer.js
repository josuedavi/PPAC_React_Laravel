import React, {Component} from 'react';
import '../../../public/css/gallery.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="row justify-content-center">
              <div className="col-md-12">
                  <p id="name">Copyright &copy; 2020</p>
                  <p id="name">Josue Castillo</p>
             </div>
            </div>
        );
    }
}