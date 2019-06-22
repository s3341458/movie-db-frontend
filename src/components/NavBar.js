import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export const NavBar = props => {
  return (
    <List component="nav">
      <ListItem component="div">
        <ListItemText inset>
          <TypoGraphy color="inherit" variant="h3">
            <Link to="/search">Search</Link>
          </TypoGraphy>
        </ListItemText>

        <ListItemText inset>
          <TypoGraphy color="inherit" variant="h3">
            <Link to="/list">Watch List</Link>
          </TypoGraphy>
        </ListItemText>
      </ListItem>
    </List>
  );
};
