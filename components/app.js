import React, { Component } from 'react'
import Header from './Header.jsx'
import ListofExercises from './ListofExercises.jsx'
import Animate from './AnimateTest.jsx'
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Template from './Template.jsx';


class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    <div style={{ padding:"50px"}}>
    <Router>

    <Route path="/breathe/exercise" component={Template}/>
    
    <Route exact="true" path="/" component={ListofExercises} />
    <Route exact="true" path="/" component={Header} />
 
  

    
    </Router>
    </div>)}

}

export default App
