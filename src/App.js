import React, { Component } from 'react';
import Tracker from './components/Tracker';
import Footer from './components/Footer';
import Loader from './components/Loader';

class App extends Component {
  render() { 
    return (
      <div>
        <div className="App" id="appid">
          <header className="App-header">
            <div className="wrapper">
              <img src="https://media.giphy.com/media/kaIVrG4k2YfooOOcYE/giphy.gif" alt="random image" />
            </div>
          </header>
          <Tracker />
          <Footer />
          <Loader />
        </div>
      </div>
    )
  }
}
 
export default App;