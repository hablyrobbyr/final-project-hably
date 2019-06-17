import React, { Component } from 'react';
import axios from 'axios';
import BaseHeader from './BaseHeader';

export default class JadwalSholat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jadsol: []
        }
    }
  
  componentDidMount() {
      axios.get(`https://time.siswadi.com/pray/Jakarta`)
        .then(res => {
          const jadsol = res.data;
          console.log(jadsol, 'oke');
          this.setState({ jadsol });
        })
  }
    render(){
        const{jadsol} = this.state
        let tampilJadwal = jadsol.length !== 0 ?
        jadsol.map(data => {
            return data.query === 'jakarta'
                
        }):
        []
        return(
            <div className="sholat">
                <BaseHeader />
            <div className="jumbotron">
                <h1 className="font-weight-bold"><center>Jadwal Sholat</center></h1>
                    <div>         
                        {tampilJadwal.length !==0 ?
                            tampilJadwal.map(res => {
                                return(
                                    <div>
                                        <li className="name" style={{marginLeft:"350px"}}>
                                            {res.items} 
                                        </li>
                                    </div>
                                )
                            }):
                            <h1>Wait...</h1>    
                    }  
                        </div>
                    </div>
                </div>
        );
    }
}
