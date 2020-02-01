import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Results from "./books/results/Results";
import Saved from "./books/saved/Saved";


class Books extends Component {

  render() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Search} />
                    <Route exact path="/saved" component={Saveed} />
                </Switch>
            </div>
        </Router>


      <div className="container">
        <div className="container mb-5 mt-5">
          <Router>
            <Route exact path='/' component={Results}/>
            <Route exact path='/saved' component={Saved} />
          </Router>
        </div>
      </div>

    )
  }

}

export default Books;