import React, { Component } from 'react';
import { SSL_OP_SINGLE_DH_USE } from 'constants';

let card = {
    border: "2px",
    borderRadius: "9px",
    backgroundColor: "white",
    padding: "20px 20px 100px 20px",
    display: "inline-block",
    height: "300px",
    margin: "1rem",
    position: "relative",
    width: "300px",
    boxShadow: "0 19px 38px rgba(0,0,0,0.10), 0 15px 12px rgba(0,0,0,0.12)"
      
}
    




class ListofExercises extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
             <div style={card} > 'empty'</div>
            <div style={card} > 'empty'</div>
            <div style={card} > 'empty'</div>  <div style={card} > 'empty'</div>
            <div style={card} > 'empty'</div>
            <div style={card} > 'empty'</div>   
            </div> 
            
        );
    }
}
 
export default ListofExercises;