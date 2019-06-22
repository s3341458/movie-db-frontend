import React from "react";
import { WithAuth } from "../containers";

class AuthView extends React.Component {
  componentDidMount() {
    this.props.fetchingRequestToken();
  }

  render() {
    return (
      <div>
        {this.props.isFetching && <p>is Fetching</p>}
        {this.props.requestToken && (
          <a
            href={
              "https://www.themoviedb.org/auth/access?request_token=" +
              this.props.requestToken
            }
          >
            {" "}
            Create Access Token
          </a>
        )}
      </div>
    );
  }
}

const Auth = WithAuth(AuthView);

export default Auth;
