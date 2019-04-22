import React, { Component } from 'react'
import Header from './Header.jsx'
import ListofExercises from './ListofExercises.jsx'
import Animate from './AnimateTest.jsx'


class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    <div style={{backgroundColor: "#e7e5e3"}}>
    <div style={{padding:"100px 0px 100px 100px"}}>
      <Animate />
    <ListofExercises />
    </div>
  
    <Header />
   
    </div>)}

}

export default App
