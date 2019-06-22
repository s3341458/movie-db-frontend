import React from "react";
import { NavBar, Routes } from "./components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import { BrowserRouter as Router } from "react-router-dom";



const App = () => (
  <Router>
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="h2" color="inherit">
            My TV shows
          </TypoGraphy>
          <NavBar />
        </Toolbar>
      </AppBar>
      <div>
        <Routes />
      </div>
    </div>
  </Router>
);

export default App;
