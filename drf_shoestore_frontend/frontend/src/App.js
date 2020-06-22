import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoedata: [],
    };
  }
  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/shoe/")
      .then(res => res.json())
      // .then((res) => console.log(res))
      .then((data) => this.setState({ shoedata: data }));
  }

  render() {
    return (
      <div>
      <h4>Shoes</h4>
        <ul>
          {this.state.shoedata && this.state.shoedata.map((shoe, index) => {
            return (
              <li key={index}>
                {" "}
                key={shoe.id}
                <br></br>
                size: {shoe.size}
                <br></br>
                brand: {shoe.brand_name}
                <br></br>
                manufacturer: {shoe.manufacturer}
                <br></br>
                color: {shoe.color}
                <br></br>
                material: {shoe.material}
                <br></br>
                type: {shoe.shoe_type}
                <br></br>
                fastener: {shoe.fasten_type}
                <br></br>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
