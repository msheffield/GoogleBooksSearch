import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from "../../pages/Search";
import Saved from "../../pages/Saved";


class Books extends Component {

  render() {
    return (
        <Router>
                <Switch>
                    <Route exact path="/" component={Search} />
                    <Route exact path="/saved" component={Saved} />
                </Switch>
        </Router>
    )
  }

}
export default Books;