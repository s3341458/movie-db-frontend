import React from "react";
import { WithAuth } from "../containers";
import { Link } from "react-router-dom";



class ApproveView extends React.Component {
  componentDidMount() {
    this.props.approveRequestToken();
  }

  render() {
    return (
      <div>
        <p>Approved visit following link:
          <Link to="/search">Get to My Homepage</Link>
        </p>
      </div>
    );
  }
}

export const Approve = WithAuth(ApproveView);

