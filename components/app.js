import React, { Component } from 'react'
import Header from './Header.jsx'
import Prana from './Prana.jsx'
import About from './About.jsx'
import Goodjob from './Goodjob.jsx'
import ListofExercises from './ListofExercises.jsx'
import Animate from './AnimateTest.jsx'

import { HashRouter as Router, Route, Link } from "react-router-dom";

import Template from './Template.jsx';


class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
    
  }

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1
    })
};


  render () {
    return (
    <div style={{ padding:"50px"}}>
    <Router>
      
    <Route path="/breathe/exercise" component={() => <Template incrementCounter={this.incrementCounter}/> }  />
    <Route path="/about" component={About}/>
    <Route path="/goodjob" component={ () => <Goodjob count={this.state.count}/> } />
    
   
    
    <Route exact="true" path="/" component={ListofExercises} />
    <Route exact="true" path="/" component={Header} />
    <Route path="/" component={Prana} />
 
  

    
    </Router>
    </div>)}

}

export default App
