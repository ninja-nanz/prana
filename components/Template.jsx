import React, { Component } from 'react';
import Exercise from './Exercise.jsx';

class Template extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <Exercise incrementCounter={this.props.incrementCounter}/>
        </div>
        );
    }
}
 
export default Template;