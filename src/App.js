import React from "react";
import { Auth, NavBar } from "./components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";

const App = () => (
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
      <Auth />
    </div>
  </div>
);

export default App;
