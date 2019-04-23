import React, { Component } from 'react'
import Header from './Header.jsx'
import ListofExercises from './ListofExercises.jsx'
import Animate from './AnimateTest.jsx'
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Exercise from './Exercise.jsx';


class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    <div style={{backgroundColor: "#e7e5e3", padding:"100px 0px 100px 100px"}}>
    <Router>
      
    <Route path="/breathe/exercise" component={Exercise}/>
    
    <Route exact="true" path="/" component={ListofExercises} />
 
  
    <Header />
    
    </Router>
    </div>)}

}

export default App
