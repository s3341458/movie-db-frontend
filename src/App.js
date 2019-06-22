import React from "react";
import { NavBar, Auth } from "./components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import { BrowserRouter as Router, Route } from "react-router-dom";


const Search = () => <h2> Search </h2>
const List = () => <h2> List </h2>

const App = () => (
  <Router>
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="title" color="inherit">
            My TV shows
          </TypoGraphy>
          <NavBar />
        </Toolbar>
      </AppBar>
      <div>
        <Route exact path="/" component={Auth} />
        <Route path="/search" component={Search} />
        <Route path="/list" component={List} />
      </div>
    </div>
  </Router>
);

export default App;
