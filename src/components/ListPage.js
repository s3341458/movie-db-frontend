import React from "react";
import { WithAuth } from "../containers";


class ListView extends React.Component {
  componentDidMount() {
    this.props.fetchingAccessToken();
  }

  render() {
    return (
      <div>
        <h2>List</h2>
      </div>
    );
  }
}
export const ListPage = WithAuth(ListView);
