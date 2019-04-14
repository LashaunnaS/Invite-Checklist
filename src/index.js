import React, { Component } from "react";
import ReactDOM from "react-dom";

import { StyledApp } from "./styles.js";
import Header from "./components/Header";
import Checklist from "./components/Checklist";
import CheckedUsers from "./components/CheckedUsers";

class App extends Component { 
  state = {
    names: [
      {
        id: "01bbb998‐af3d‐47a4‐b0ff‐e67d033d80e9",
        name: "Luz Ballard",
        checked: false
      },
      {
        id: "01021494‐f157‐4183‐964c‐6b0ddc964ab8",
        name: "Corey Johnson",
        checked: false
      },
      {
        id: "97a2daa4‐406b‐4b1c‐831e‐bdfd90b224f2",
        name: "Andrew Torres",
        checked: true
      },
      {
        id: "6256ba85‐b59f‐40b9‐8715‐406cc54d7f05",
        name: "Nichole Wilson",
        checked: true
      },
      {
        id: "5c0c746c‐ec56‐4fb7‐8b32‐066b64d70611",
        name: "Nancy Hall",
        checked: false
      },
      {
        id: "c103b480‐8efb‐450f‐9141‐6a8037de2348",
        name: "Agnes Lorenzen",
        checked: true
      },
      {
        id: "4e0cc3dc‐fce9‐45d9‐85c7‐a3ae5cb0ce57",
        name: "Donald Hyde",
        checked: false
      },
      {
        id: "f80af139‐5c68‐4475‐8cb6‐ced7e38c6f43",
        name: "Dennis Fuller",
        checked: false
      },
      {
        id: "5073359e‐b228‐4852‐b1a3‐3f2edfc8672f",
        name: "Francis Hodgkins",
        checked: false
      },
      {
        id: "9c9a3cc8‐044e‐43d0‐87ff‐58a6b44eca53",
        name: "David McLain",
        checked: false
      }
    ]
  };

  componentDidMount = () => {
    let users;

    localStorage.getItem('names')
      ? (users = JSON.parse(localStorage.getItem('names')))
      : (users = this.state.names);

    this.setState({ names: users });
  };

  handleChecked = (value, key) => {
    const prevState = this.state.names;
    const user = prevState.find(element => key === element.id);
    user.checked = !value;
    this.setState({
      names: [...prevState]
    });

    localStorage.setItem("names", JSON.stringify(prevState));
  };

  render() {
    return (
      <StyledApp>
        <Header />
        <Checklist
          namesList={this.state.names}
          handleChecked={this.handleChecked}
        />
        {/*=== TESTING PURPOSES ===*/}
        <CheckedUsers namesList={this.state.names} />
      </StyledApp>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
