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
    <div style={{backgroundColor: "#e7e5e3"}}>
    <Router>

    <div style={{padding:"100px 0px 100px 100px"}}>
    <ListofExercises />
    </div>
  
    <Header />
    <Route path="/exercise" component={Exercise}/>
    </Router>
    </div>)}

}

export default App
