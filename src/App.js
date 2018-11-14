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
import RegisterInstitution from "./containers/Institution/RegisterInstitution";
import Information from "./containers/Information/Information";
import RegisterEvents from "./containers/Institution/RegisterEvents";
import Events from "./containers/Events/Events";
import UserEdit from "./containers/User/UserEdit";
import NotFound from "./containers/NotFound/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Template>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/localize" component={Localize} />
            <Route exact path="/information" component={Information} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/user" component={User} />
            <Route exact path="/user/edit" component={UserEdit} />
            <Route exact path="/institution" component={Institution} />
            <Route exact path="/institution/register" component={RegisterInstitution} />
            <Route exact path="/institution/register/events" component={RegisterEvents} />
            <Route component={NotFound} />
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
