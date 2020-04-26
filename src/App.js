import React, { useState } from 'react';
import Tracker from './components/Tracker';
import Compare from './components/Compare';
import Footer from './components/Footer';
import Loader from './components/Loader';

const App = () => {
  const [compare, setCompare] = useState(false);

  const handleClick = () => {
    setCompare(!compare);
    var main = document.querySelector('main');
    main.classList.toggle('active');
  }

  return (
    <div>
      <div className="App" id="appid">
        <header className="App-header">
          <div className="wrapper">
            <img src="https://media.giphy.com/media/kaIVrG4k2YfooOOcYE/giphy.gif" alt="random image" />
          </div>
          <button id="button" onClick={handleClick}>{ compare ? 'X' : 'Compare' }</button>
        </header>
        <div id="main">
          <h2>Coronavirus Tracker</h2>
          <main>
            <Tracker />
            { compare ? <Compare /> : '' }
          </main>
        </div>
        <Footer />
        <Loader />
      </div>
    </div>
  )
}
 
export default App;