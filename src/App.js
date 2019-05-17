import React, { Component } from "react";

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      deitaryRestrictions: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked
        })
      : this.setState({
          [name]: value
        });
  }

  render() {
    return (
      <main>
        <form>
          <input
            name="firstName"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <br />
          <input
            name="lastName"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <br />
          <input
            name="age"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <br />
          <label />
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.value === "male"}
            onChange={this.handleChange}
          />{" "}
          Male
          <br />
          <lable />
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.value === "female"}
            onChange={this.handleChange}
          />{" "}
          Female
          <br />
          <select
            name="loaction"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="chicago">Chicago</option>
            <option value="denver">Denver</option>
            <option value="boise">Boise</option>
          </select>
          <br />
          {/* Create check boxes for dietary restrictions here */}
          <br />
          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>
          Your dietary restrictions:
          {/* Dietary restrictions here, comma separated */}
        </p>
      </main>
    );
  }
}

export default App;
