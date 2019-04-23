import React, { Component } from 'react';
import paper from 'paper'


let headerstyle = {
    fontSize: "11em",
    position: "fixed", 
    left: 0,
    bottom: 0,
    margin: "1em 0em 0em 0.2em",
    color: "#333",
    
}



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
                
        }
    }

      
    
    render() { 
        return (
            
            <div>
          
                <h1 style= {headerstyle}> Breathe </h1>
           
           </div>
           
            
        );
    }
}
 
export default Header;