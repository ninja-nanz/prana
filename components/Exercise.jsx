import React, { Component } from 'react';


class Exercise extends Component {
    constructor(props) {
        super(props);
        
    }

    
    render() { 

        const handleClick = () => {
            window.location = "#/goodjob" 
            this.props.incrementCounter()
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