import React from "react";
import { WithAuth } from "../containers";

class AuthView extends React.Component {
  render() {
    return (
      <div>
        {this.props.requestToken ? (
          <a
            href={
              "https://www.themoviedb.org/auth/access?request_token=" +
              this.props.requestToken
            }
          >
            Approve to Use Movie Database
          </a>
        ) : (
          <button
            onClick={e => {
              this.props.fetchingRequestToken();
            }}
          >Login in use Auth</button>
        )}
      </div>
    );
  }
}

export const Auth = WithAuth(AuthView);
