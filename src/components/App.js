import React, { Component } from 'react';
import Cards from "./Cards";
import { users } from "../data"

const navItems = ["Home", "About us", "Contact"];


class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <div className="logo">
            <a href="/">Users Cool App</a>
          </div>
          <nav>
            <ul>
              {navItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </nav>
        </header>
        <Cards users={users} />
      </div>
    );
  }
}
export default App;
