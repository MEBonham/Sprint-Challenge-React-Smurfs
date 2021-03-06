import React, { Component } from 'react';
import axios from "axios";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const newSmurfObj = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    axios
      .post("http://localhost:3333/smurfs", newSmurfObj)
      .then(response => {
        this.props.refresh(response.data);
        this.setState({
          name: '',
          age: '',
          height: ''
        });
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.addSmurf} className="SmurfForm">
        <h1>Add Smurf Form</h1>
        <input
          onChange={this.handleInputChange}
          placeholder="name"
          value={this.state.name}
          name="name"
          required
        />
        <input
          onChange={this.handleInputChange}
          placeholder="age"
          value={this.state.age}
          name="age"
          type="number"
          required
        />
        <input
          onChange={this.handleInputChange}
          placeholder="height"
          value={this.state.height}
          name="height"
          required
        />
        <button type="submit">Add to the village</button>
      </form>
    );
  }
}

export default SmurfForm;
