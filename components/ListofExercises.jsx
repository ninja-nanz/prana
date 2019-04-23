import React, { Component } from 'react';
import Radium, {Style}from 'radium'
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

import Exercise from './Exercise.jsx'
import { transform } from 'popmotion';


const styles = {
    cardStyle: {
        border: "2px",
        borderRadius: "9px",
        backgroundColor: "white",
        padding: "20px 20px 100px 20px",
        display: "inline-block",
        height: "300px",
        margin: "1rem",
        position: "relative",
        width: "300px",
        boxShadow: "0 9px 21px rgba(0,0,0,0.10), 0 15px 12px rgba(0,0,0,0.12)",
        transition: "transform 500ms ease-in-out",
        ':hover': {
            boxShadow: "0 39px 44px rgba(0,0,0,.25), 0 22px 12px rgba(0,0,0,0.12)",
           transform: "translate(0, -20px)"},
            
        ':active': {
            backgroundColor: "yellow",
        }
    }
}



class ListofExercises extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

  

    render() { 
        const handleClick = (e) => {
            window.location = "#/breathe/exercise";     
         }

        return ( 
            <div>
             <div key="1" style={styles.cardStyle} onClick={handleClick}> Breath work</div>
             <div key="2" style={styles.cardStyle} > 'empty'</div>
             <div key="3" style={styles.cardStyle} > 'empty'</div>
             <div key="4" style={styles.cardStyle} > 'empty'</div>
             <div key="5" style={styles.cardStyle} > 'empty'</div>

           
            </div> 
            
        );
    }
}
 
export default Radium(ListofExercises);