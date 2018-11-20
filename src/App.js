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
import UserInstitutionDetails from "./containers/User/UserInstitutionDetails";
import UserDonation from "./containers/User/UserDonation";
import Administrator from "./containers/Administrator/Administrator";
import InstitutionDetails from "./containers/Institution/InstitutionDetails";
import InstitutionDonation from "./containers/Institution/InstitutionDonation";
import InstitutionUsers from "./containers/Institution/InstitutionUsers";

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
            <Route exact path="/user/institution" component={UserInstitutionDetails} />
            <Route exact path="/user/donation" component={UserDonation} />
            <Route exact path="/user/edit" component={UserEdit} />
            <Route exact path="/institution" component={Institution} />
            <Route exact path="/institution/register" component={RegisterInstitution} />
            <Route exact path="/institution/details" component={InstitutionDetails} />
            <Route exact path="/institution/events" component={RegisterEvents} />
            <Route exact path="/institution/donation" component={InstitutionDonation} />
            <Route exact path="/institution/users" component={InstitutionUsers} />
            <Route exact path="/administrator" component={Administrator} />
            <Route component={NotFound} />
          </Switch>
        </Template>
      </Router>
    );
  }
}

export default App;
