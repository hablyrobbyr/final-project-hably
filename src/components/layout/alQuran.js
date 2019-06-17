import React, { Component } from 'react';
import axios from 'axios';
import BaseHeader from './BaseHeader';

export default class alQuran extends Component{
    constructor(props) {
        super(props)
        this.state = {
            categories: []
        }
    }
  
  componentDidMount() {
      axios.get(`https://al-quran-8d642.firebaseio.com/data.json?print=pretty`)
        .then(res => {
          const categories = res.data;
          console.log(categories);
          this.setState({ categories });
        })
  }
    render(){
        const{categories} = this.state
        let tampilAlquranMekah = categories.length !== 0 ?
        categories.filter(data => {
            return data.type === 'mekah'
                
        })
        :
        []
        let tampilAlquranMadinah = categories.length !== 0 ?
        categories.filter(data => {
            return data.type === 'madinah'
                
        })
        :
        []
        return(
            <div className="quran">
            <BaseHeader />
            <div className="jumbotron">
                <h1 className="font-weight-bold"><center>Surat Al-Quran</center></h1>
                 <br />
                 <div className="row"  style={{marginLeft:"300px"}}>
                    <div className="col">  
                        <h1 className="font-weight-bold">MEKAH</h1>
                        <br />       
                        {tampilAlquranMekah.length !==0 ?
                            tampilAlquranMekah.map(res => {
                                return(
                                    <div key={res.type}>

                                        <li>
                                            {res.nama} 
                                        </li>

                                    </div>
                                )
                            }):
                            <h1>Wait...</h1>    
                        }   
                    </div>

                    <div className="col">  
                        <h1 className="font-weight-bold">MADINAH</h1>
                        {tampilAlquranMadinah.length !==0 ?
                            tampilAlquranMadinah.map(res => {
                                return(
                                    <div key={res.type}>
                                        <li className="name">
                                            {res.nama} 
                                        </li>
                                    </div>
                                )
                            }):
                            <h1>Wait...</h1>    
                        }  
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}