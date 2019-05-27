import React, { Component } from "react";
import Login from "./components/Login";
import firebaseApp from "./config/firebase";
import Nav from "./components/Navbar";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <div>{this.state.user ? <Nav user={this.state.user} /> : <Login />}</div>
    );
  }
}

export default App;
