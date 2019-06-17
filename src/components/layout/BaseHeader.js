import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BaseHeader extends Component {
  render() { 
    return (
      <ul className="nav flex-grow-1 nav-pills text-capitalize py-2">
        <h2><Link to="/" className="nav-item text-white font-weight-bold mr-5 ml-3">MUSLIM PRO</Link></h2>
        

          {/* <li class="nav-item dropdown">
              <a class="nav-link text-white dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Fitur</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Surat Al-Quran</a>
                  <a class="dropdown-item" href="#">Jadwal Sholat</a>
                </div>
          </li> */}
          
          <li className="nav-item mr-5">
              <Link to="/suratAlQuran" className="nav-link text-white">Surat Al-Quran</Link></li>
          <li className="nav-item mr-5">
              {/* <Link to="/jadwalSholat" className="nav-link text-white">Jadwal Sholat</Link></li>
          <li className="nav-item mr-5"> */}
              <Link to="/KalenderHijriyah" className="nav-link text-white">Kalender Hijriyah</Link></li>
          {/* <li className="nav-item flex-grow-1 text-right mr-3"> */}
              {/* <a className="nav-link text-white" href="https://www.twitter.com/">Login</a></li> */}
       </ul>

      
    );
  }
}

export default BaseHeader;
