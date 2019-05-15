import React, { Component } from 'react';
import './App.css';

import BaseHeader from './components/layout/BaseHeader';
import Meetup from './components/layout/Meetup';
import NextMeetup from './components/layout/NextMeetup';
import { About } from './components/layout/About';
import Members from './components/layout/Members';
import Past from './components/layout/Past';
import BaseFooter from './components/layout/BaseFooter';


class App extends Component {
  state = {
    baseHeader: {
      index0:"QTemu",
      index1:"Create Meetup",
      index2:"Explore",
      index3:"Login",
    },

    meetup:{
      imgSrc:"https://via.placeholder.com/180",
      judul:"Hacktiv8 Meetup",
      location:"Location",
      member:"Members",
      organizers:"Organizers",
      jakarta:"Jakarta, Indonesia",
      jumlah:"1,078",
      nama:"Adhy Wiranata",
      button:"Join Us",
    },

    nextMeetup:{
      heading:"Next Meetup",
      body: {
        heading1:"Awesome meetup and event",
        heading2:"25 January 2019",
        heading3:"Hello JavaScript & Node.js Ninjas",
        body1:"Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!",
        body2:"The meetup format will contain some short stories and technical talks.",
        body3:"If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.",
        body4:"Remember to bring a photo ID to get through building security.",
        footer1:"-----",
        footer2:"See you there!",
        footer3:"Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers",
        }
      },

    aboutMeetup:{
      heading:"About Meetup",
      body:{
        index0:"Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.",
        index1:"Twitter: @JakartaJS and we use the hashtag #jakartajs",
        }
      },

    member:{
      index: {
        member:"Members",
        seeAll:"See all",
        organizers:"Organizers",
        name:"Adhy Wiranata",
        equals:"4 others.",
        }
      },

    pastMeetUp:{
      headingPast: {
        index0:"Past Meetups",
        index1:"See all",
      },
      col1: {
        index0:"27 November 2017",
        index1:"#39 JakartaJS April Meetup with Kumparan",
        index2:"139",
        index3:"went",
        button:"View",
      },
      col2: {
        index0:"27 November 2017",
        index1:"#39 JakartaJS April Meetup with Kumparan",
        index2:"139",
        index3:"went",
        button:"view",
      },
      col3: {
        index0:"27 November 2017",
        index1:"#39 JakartaJS April Meetup with Kumparan",
        index2:"139",
        index3:"went",
        button:"View",
      },
    
      footer:"Copyright Hacktiv8 2018",        
  
      }
    }
  render() {
    return (
      <div className = "App">
        <BaseHeader
          head0={this.state.baseHeader.index0}
          head1={this.state.baseHeader.index1}
          head2={this.state.baseHeader.index2}
          head3={this.state.baseHeader.index3}
        />
        <Meetup
          meetup0={this.state.meetup.imgSrc}
          meetup1={this.state.meetup.judul}
          meetup2={this.state.meetup.location}
          meetup3={this.state.meetup.member}
          meetup4={this.state.meetup.organizers}
          meetup5={this.state.meetup.Jakarta}
          meetup6={this.state.meetup.jumlah}
          meetup7={this.state.meetup.nama}
          meetup8={this.state.meetup.button}
        />
        <NextMeetup
          nextM0={this.state.nextMeetup.heading}
          nextM1={this.state.nextMeetup.body.heading1}
          nextM2={this.state.nextMeetup.body.heading2}
          nextM3={this.state.nextMeetup.body.heading3}
          nextM4={this.state.nextMeetup.body.body1}
          nextM5={this.state.nextMeetup.body.body2}
          nextM6={this.state.nextMeetup.body.body3}
          nextM7={this.state.nextMeetup.body.body4}
          nextM8={this.state.nextMeetup.body.footer1}
          nextM9={this.state.nextMeetup.body.footer2}
          nextM10={this.state.nextMeetup.body.footer3}
        />
        <About
          about0={this.state.aboutMeetup.heading}
          about1={this.state.aboutMeetup.body.index0}
          about2={this.state.aboutMeetup.body.index1}
        />
        <Members
          member0={this.state.member.index.member}
          member1={this.state.member.index.seeAll}
          member2={this.state.member.index.organizers}
          member3={this.state.member.index.name}
          member4={this.state.member.index.equals}
        />
        <Past
          heading0={this.state.pastMeetUp.headingPast.index0}
          heading1={this.state.pastMeetUp.headingPast.index1}
          pastM0={this.state.pastMeetUp.col1.index0}
          pastM1={this.state.pastMeetUp.col1.index1}
          pastM2={this.state.pastMeetUp.col1.index2}
          pastM3={this.state.pastMeetUp.col1.index3}
          pastM4={this.state.pastMeetUp.col1.button}
          pastM5={this.state.pastMeetUp.col2.index0}
          pastM6={this.state.pastMeetUp.col2.index1}
          pastM7={this.state.pastMeetUp.col2.index2}
          pastM8={this.state.pastMeetUp.col2.index3}
          pastM9={this.state.pastMeetUp.col2.button}
          pastM10={this.state.pastMeetUp.col3.index0}
          pastM11={this.state.pastMeetUp.col3.index1}
          pastM12={this.state.pastMeetUp.col3.index2}
          pastM13={this.state.pastMeetUp.col3.index3}
          pastM14={this.state.pastMeetUp.col3.button}
        />
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

export default App;
