import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Home from "./Component/Home/Home"
import AboutMe from './Component/Pages/AboutMe/AboutMe';
import Resume from "./Component/Pages/Resume/Resume"
import Services from "./Component/Pages/Services/Services"


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/AboutMe' component={AboutMe} />
          <Route exact path='/Resume' component={Resume} />
          <Route exact path='/Services' component={Services} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}
