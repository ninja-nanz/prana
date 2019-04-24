import React, { Component } from 'react';




class Goodjob extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0
         }
    }

    
   
      
    render() { 
        const handleClick = (e) => {
            window.location = "#/" 
         }
        return ( 
        <div>
        <h1> Good Job</h1> 
        <p> Breathe Easy</p><br/>
        <span onClick={handleClick}>Try again</span>
        <div className="counter"> 
            <p>TOTAL SESSIONS </p>
            <h1> {this.props.count}</h1>
            
        </div>
        

        </div> );
    }
}
 
export default Goodjob;