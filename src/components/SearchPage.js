import React from "react";
import { WithAuth } from "../containers";

class SearchView extends React.Component {
  componentDidMount() {
    this.props.fetchingAccessToken();
  }

  render() {
    return (
      <div>
        <h2>Search</h2>
      </div>
    );
  }
}
export const SearchPage = WithAuth(SearchView);


