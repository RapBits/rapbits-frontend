import React, { Component } from 'react';
import axios from 'axios'; 
import InfiniteScroll from 'react-infinite-scroller';
import logo from './rapbitssquare.png';
import './App.css';

const imageList = [];
const api = {
    // baseUrl: 'https://api.soundcloud.com',
    // client_id: 'caf73ef1e709f839664ab82bef40fa96'
    baseUrl: 'https://picsum.photos/v2/list'
};
class App extends Component {
  constructor() {
    super() 
    this.state = {
      tracks: [], 
      hasMoreItems: true, 
      nextHref: null
    }

  }  
  loadItems = async (page) => {
    const url = this.state.nextHref ? this.state.nextHref : api.baseUrl ;
    try {
      const res = await axios.get(url, {
      }) 
      const tracks = []; 
      res.data.map((track) => {
        tracks.push(track); 
      });
      this.setState({tracks: tracks, nextHref: res.next_href, hasMoreItems: false})
    } catch (error) {
      console.error(error) 
    }
    return;
  }
  
  render() {
    const loader = <div className="loader">Loading ...</div>;
    let items = []; 
    console.log(this.state.tracks);
    this.state.tracks.map((track, i) => {
        items.push(
            <div className="track" key={i}>
                <a href={track.url} target="_blank">
                    <img src={track.download_url} width="150" height="150" />
                    <p className="title">{track.author}</p>
                    hi
                </a>
            </div>
        );
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Rapbits</h1>
        </header>
        <div style={{'height':'700px','overflow':'auto'}} ref={(ref) => this.scrollParentRef = ref}>
          <div className='container'>
              <InfiniteScroll
                  pageStart={0}
                  loadMore={this.loadItems}
                  hasMore={this.state.hasMoreItems}
                  loader={loader}
                  useWindow={false}
                  getScrollParent={() => this.scrollParentRef}
              >
                  {items}
              </InfiniteScroll>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
