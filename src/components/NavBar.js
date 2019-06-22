import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";

const NavBar = (props) => {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <TypoGraphy color="inherit" variant="title">
            Home
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color="inherit" variant="title">
            Watch List
          </TypoGraphy>
        </ListItemText>
      </ListItem>
    </List>
  );
}

export default NavBar;
