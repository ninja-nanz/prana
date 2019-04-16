import React, { Component } from 'react'
import Header from './Header.jsx'


class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (<div>

    
    <h1>Welcome to {this.props.name}</h1>
    <Header />
   
    </div>)}

}

export default App
