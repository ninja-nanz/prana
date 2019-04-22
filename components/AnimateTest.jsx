import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';

let box = {
    width: "100px",
    height: "100px",
    background: "#ff1c68",
    transformOrigin: "50% 50%",
  
  }
  

const Box = posed.div({
            
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                x: -10,
                y: -10,
                boxShadow: '10px 10px 20px rgba(161, 0, 246, 0.2)',
                transition: { duration: 700 }
              }
          });
        
class AnimateTest extends Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: true }
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({ isVisible: !this.state.isVisible });
        }, 1000);
      }
    
    render() {
        

        return (
            <Box style={box} pose={this.state.isVisible ? 'visible' : 'hidden'}  />
          );
    }
}
 
export default AnimateTest;