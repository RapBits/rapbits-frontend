import React, { Component } from 'react';
// import { Columns } from "react-bulma-components/full";
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
        <div className='logo_container'> 
          <div className='logo'> <h1>RAPBITS</h1> </div> 
        </div>
        </div> 
        <div className='hero_section'> 
          <div className='main_container'> 
            <div className='search_container'> <h2> SEARCH </h2> </div> 
            <div className='tagline_container'> 
              <h2>Rapbits lets you share your favorite rap lines with friends. </h2> 
            </div>
          </div>
        </div>
        <div className='songs_section'> 
        <div className='songs_container'> 
          <div className='img_grid'> 
            <img src='https://images.genius.com/d28ff3b1c3466b0234599b62e5857bb0.1000x1000x1.jpg' />
            <img src='https://images.genius.com/d28ff3b1c3466b0234599b62e5857bb0.1000x1000x1.jpg' />
            <img src='https://images.genius.com/d28ff3b1c3466b0234599b62e5857bb0.1000x1000x1.jpg' />
            <img src='https://images.genius.com/d28ff3b1c3466b0234599b62e5857bb0.1000x1000x1.jpg' />
            <img src='https://images.genius.com/d28ff3b1c3466b0234599b62e5857bb0.1000x1000x1.jpg' />
            <img src='https://images.genius.com/d28ff3b1c3466b0234599b62e5857bb0.1000x1000x1.jpg' />
            <img src='https://images.genius.com/d28ff3b1c3466b0234599b62e5857bb0.1000x1000x1.jpg' />
            <img src='https://images.genius.com/d28ff3b1c3466b0234599b62e5857bb0.1000x1000x1.jpg' />
            <img src='https://images.genius.com/d28ff3b1c3466b0234599b62e5857bb0.1000x1000x1.jpg' />
            <img src='https://images.genius.com/d28ff3b1c3466b0234599b62e5857bb0.1000x1000x1.jpg' />
          </div> 
        </div> 
        <div className='button_container'> 
          <button className='call_to_action'> Load More + </button>  
        </div>
        </div>
      </div>
    );
  }
}

export default App;
