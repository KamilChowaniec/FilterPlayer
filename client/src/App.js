import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Room from "./views/Room/Room.jsx";
import Home from "./views/Home/Home.jsx";

const App = () => (
  <Router>
    <div>
      <Switch>
      <Route path="/Room/:id">
          <Room />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/*">
            <h1>error!</h1>
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
