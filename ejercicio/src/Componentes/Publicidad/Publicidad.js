import React, { Component } from 'react';
import './Publicidad.css';

class Publicidad extends Component {

constructor(props) { 
  super(props)
  this.props = props
  console.log(props)
}
render() {
    return (
      <div id="publicidad-container">
        <div>
          <p>Publicidad</p>   
        </div>   
        }
      </div>
   )    
  } 
}

export default Publicidad;

