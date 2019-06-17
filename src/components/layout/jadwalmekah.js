import React, { Component } from 'react';
import axios from 'axios';

export default class Jadwal extends Component {
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


render() {
    const{categories} = this.state
    let tampilmekah = categories.length !== 0 ?
        categories.filter(data=>{
            return data.type === "mekah"
        }):[]
   
        return(
            <div>
                {tampilmekah.length !==0 ?
                    tampilmekah.map(res => {
                        return(
                            <div>
                                <li className="name" style={{marginLeft:"350px"}}>
                                    {res.nama} 
                                </li>
                            </div>
                        )
                    }):
                    <h1>Wait...</h1>    
            }
            </div>
        )
    }

}