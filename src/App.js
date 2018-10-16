import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Template from "./components/Template/Template";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Logout from "./containers/Login/Logout";
import Register from "./containers/Register/Register";
import User from "./containers/User/User";
import Localize from "./containers/Localize/Localize";
import Institution from "./containers/Institution/Institution";

class App extends Component {
  render() {
    return (
      <Router>
        <Template>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            <Route path="/user" component={User} />
            <Route path="/localize" component={Localize} />
            <Route path="/institution" component={Institution} />
            {/* <Route path="/newPost" component={NewPost} />
             <Route path="/:category/:id" component={DetailsPost} />
             <Route path="/react" component={ReactPage} />
             <Route path="/udacity" component={UdacityPage} />
             <Route path="/redux" component={ReduxPage} />
             <Route component={NotFound} /> */}
          </Switch>
        </Template>
      </Router>
    );
  }
}

export default App;
