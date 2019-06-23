import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TypoGraphy from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { WithAuth } from "../containers";

const NavBarView = props => {
  return (
    props.requestToken &&
    props.requestTokenApproved && (
      <List component="nav">
        <ListItem component="div">
          <ListItemText inset>
            <TypoGraphy color="inherit" variant="h3">
              <Link to="/search">Home</Link>
            </TypoGraphy>
          </ListItemText>

          <ListItemText inset>
            <TypoGraphy color="inherit" variant="h3">
              <Link to="/list">Watch List</Link>
            </TypoGraphy>
          </ListItemText>
        </ListItem>
      </List>
    )
  );
};

export const NavBar = WithAuth(NavBarView);
