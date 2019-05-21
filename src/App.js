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
      deitaryRestrictions: "",
      isVegan: "",
      isKosher: "",
      isGlutenFree: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit() {
    alert("submitted");
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
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />{" "}
          Male
          <br />
          <lable />
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
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
          Dietary Restrictions:
          <br />
          <label />
          <input
            type="checkbox"
            name="isVegan"
            value={this.state.name}
            onChange={this.handleChange}
          />
          Vegan?
          <br />
          <label />
          <input
            type="checkbox"
            name="isKosher"
            value={this.state.name}
            onChange={this.handleChange}
          />
          Kosher?
          <br />
          <label />
          <input
            type="checkbox"
            name="isGlutenFree"
            value={this.state.name}
            onChange={this.handleChange}
          />
          Gluten Free?
          <br />
          <br />
          <button type="submit" onSubmit={this.handleSubmit} value="Submit">
            Submit
          </button>
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
          <br />
          Vegan: {this.state.isVegan ? "Yes" : "No"}
          <br />
          Kosher: {this.state.isKosher ? "Yes" : "No"}
          <br />
          Gluten Free: {this.state.isGlutenFree ? "Yes" : "No"}
        </p>
      </main>
    );
  }
}

export default App;
