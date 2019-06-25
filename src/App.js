import React, { Component } from 'react';
// import Header from './header';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  
  render() {
   
    return (
      <div className="App">
        <div className='header'> 
        <h2> RAPBITS </h2> 
        </div> 
        <div className='hero_section'> 
          <div className='main_container'> 
            <h1> CONTENT </h1> 
            <div className='search_container'> <h2> SEARCH </h2> </div> 
            <div className='tagline_container'> 
              <h2>Rapbits lets you share your favorite rap lines with friends. </h2> 
              <button className='call_to_action'> Learn More + </button> 
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
