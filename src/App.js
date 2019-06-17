import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import alQuran from './components/layout/alQuran';
import jadwalSholat from './components/layout/jadwalSholat';
import KalenderHijriyah from './components/layout/KalenderHijriyah';

class App extends Component {
  render(){
    return(
      <Router>
        <Route path='/' exact component={Home} />     
        <Route path='/suratAlQuran' exact component={alQuran} />     
        <Route path='/jadwalSholat' exact component={jadwalSholat} />    
        <Route path='/KalenderHijriyah' exact component={KalenderHijriyah} />    
      </Router>
    );
  }
}

export default App;