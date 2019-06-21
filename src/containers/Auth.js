import React from "react";
import { connect } from "react-redux";
import { auth } from "../reduxStore";

const AuthView = props => (
  <div>
    {props.isFetching && <p>is Fetching</p>}
    {props.requestToken ? (
      <button
        onClick={e => {
          props.fetchingAccessToken();
        }}
      >
        {" "}
        Create Access Token
      </button>
    ) : (
      <button
        onClick={e => {
          props.fetchingRequestToken();
        }}
      >
        fetching Request Token
      </button>
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    isFetching: state.auth.isFetching,
    requestToken: state.auth.requestToken,
    accessToken: state.auth.AccessToken,
  };
};

const mapDispatchToProps = {
  fetchingRequestToken: auth.actions.fetchingRequestToken,
  fetchingAccessToken: auth.actions.fetchingAccessToken
};

export const Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthView);
