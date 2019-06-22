import React from "react";
import { WithAuth } from "../containers";
import Cookies from "universal-cookie";

class AuthView extends React.Component {
  componentDidMount() {
    this.props.fetchingRequestToken();
  }

  render() {
    const cookies = new Cookies();
    const requestToken = cookies.get("requestToken");
    return (
      <div>
        {this.props.isFetching ? (
          <p>Waiting ...</p>
        ) : (
          requestToken && (
            <a
              href={
                "https://www.themoviedb.org/auth/access?request_token=" +
                requestToken
              }
            >
              Approve to Use Movie Database
            </a>
          )
        )}
      </div>
    );
  }
}

export const Auth = WithAuth(AuthView);
