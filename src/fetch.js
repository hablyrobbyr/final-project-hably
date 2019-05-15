import React from "react";
import axios from "axios";

class FetchData extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    axios
      .get("https://swapi.co/api/people")
      .then(response => this.setState({ people: response.data }));
  }
  render() {
    return (
        <div>
        <h1>Fetching data...</h1>
        <ul>{this.state.people.map(p => <li>{p.name}</li>)}</ul>
      </div>
    );
    // <h1> Fetching data...  </h1>;
  }
}