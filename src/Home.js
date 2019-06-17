import React, { Component } from 'react';
import './App.css';

import BaseHeader from './components/layout/BaseHeader';
import { About } from './components/layout/About';
import BaseFooter from './components/layout/BaseFooter';



class Home extends Component {
  state = {
  
      footer:"Copyright Hacktiv8 2018"       
    }
  render() {
    return (
      <div className = "App">
        <BaseHeader/>
        <About/>
        
        {/* <Meetup/> */}
        {/* <NextMeetup/> */}
        {/* <Members/> */}

  
        {/* <table className="table-bordeless">
        <thead>
          <tr>
            <th scope="col"><Past/></th>
            <th scope="col"><Past/></th>
            <th scope="col"><Past/></th>
          </tr>
        </thead>
        </table> */}
     
        <BaseFooter
          footerBase={this.state.footer}
        />
      </div>
    );
  }
}

// import axios from "axios";

// class App extends React.Component {  
//   constructor(props) {
//     super(props);
//     this.state = {
//       people: []
//     };
//   }
//   componentDidMount() {
//     axios
//       .get("https://swapi.co/api/people")
//       .then(response => this.setState({ people: response.data.results}));
//   }
//   render() {
    
//     const { classes } = this.props
//     const { people } = this.state
//     let filteredByMass = people.length != 0 ? people.filter(data => {
//       return data.mass > 70
//     })
//     :
//     []


//     return(
//       <div className="App">
//       {
//         filteredByMass.length != 0 ?
//           filteredByMass.map( result => {
//             return(
//               <React.Fragment key={result.name}>
//                 <li>{result.name}</li>
//               </React.Fragment>
//             )
//           })
//       :
//           <h1>LOADING</h1>
//       }
      
// </div>

//     )
// {/* 
//     return (
//         <React.Fragment>
        
//           {/*  <h1>Fetching data...</h1> */}
//           {/* <ul>{this.state.people.map(p => <li>{p.name}</li>)}</ul>  */}
          
//         {/* <li>{result.name}</li> */}
//         {/* <li>+++++++++</li> */}
        
      
//       {/* </React.Fragment> */}
//     // );
//   }
// // } 
// }

export default Home;
