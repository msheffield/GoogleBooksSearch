import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron>
          <h1>Google Books Search</h1>
          <h3>Find all yer books here!</h3>
        </Jumbotron>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
