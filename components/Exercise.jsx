import React, { Component } from 'react';


class Exercise extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 

        const handleClick = (e) => {
            window.location = "#/goodjob" 
         }

        return ( 
        <div>
            <section className="demo">  
            <div className="box">  
                <div className="leaf"></div>  
                <div className="leaf"></div> 
                <div className="leaf"></div> 
                <div className="leaf"></div> 
                <div className="leaf"></div>  
                <div className="leaf"></div> 
                <div className="leaf"></div> 
                <div className="leaf"></div>  
               <div className="in-out"></div>
            </div>  
            
            </section>

            <button onClick={handleClick}>I'm done</button>

        </div>
        );
    }
}
 
export default Exercise;