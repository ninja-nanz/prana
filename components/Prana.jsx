import React, { Component } from 'react';




class Prana extends Component {
    constructor(props) {
        super(props);
        this.state = {
                
        }
    }

      
    
    render() { 
        const handleClick = (e) => {
            window.location = "#/" 
         }
        return (
            
            <div className="prana" onClick={handleClick}>
                <h3>PRANA</h3> 
                <h4> sync your breath</h4>
             
           
           </div>
           
            
        );
    }
}
 
export default Prana;