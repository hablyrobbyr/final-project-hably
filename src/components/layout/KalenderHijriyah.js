import React, { Component } from 'react';
import axios from 'axios';
import BaseHeader from './BaseHeader';

export default class KalenderHijriyah extends Component{
    constructor(props) {
        super(props)
        this.state = {
            categories: []
        }
    }
  
  componentDidMount() {
      axios.get(`http://api.aladhan.com/v1/gToHCalendar/6/2019`)
        .then(res => {
          const categories = res.data;
        //   console.log(categories.data, 'okelagi');
          this.setState({ categories:categories.data });
        })
    }
    render(){
        const{categories} = this.state
        let tampilKalender = categories.length !== 0 ?
        categories.map(data => {
            return data
                
        })
        :
        []
        console.log(categories, 'tampil oke')

        return(
            <div className="kalender">
            <BaseHeader />
            <div className="jumbotron">
                <h1 className="font-weight-bold"><center>Kalender Hijriyah</center></h1>
                {/* <h3 className="font-weight-bold"><center>Hari Ini</center></h3> */}
                 <br />
                 <div className="row"  style={{marginLeft:"250px"}}>
                    <div className="col">  
                       <h5 className="font-weight-bold">Tanggal Umum</h5>
                        {tampilKalender.length !==0 ?
                            tampilKalender.map(res => {
                                // console.log(res, 'okelagilagi')
                                return(
                                    <div className="font-weight-bold" style={{marginLeft:"10px"}}>
                                        
                                        <li>
                                            {res.gregorian.month.en}, 
                                            {res.gregorian.date}
                                        </li>

                                    </div>
                                )
                            }):
                            <h1>Wait...</h1>    
                        }  
                        </div>

                    <div className="col">  
                       <h5 className="font-weight-bold">Tanggal Hijriyah</h5>                  
                        {tampilKalender.length !==0 ?
                            tampilKalender.map(res => {
                                // console.log(res, 'okelagilagi')
                                return(
                                    <div className="font-weight-bold" style={{marginLeft:"10px"}}>
                                        
                                        <li>
                                            {res.hijri.month.en},
                                            {res.hijri.date}
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