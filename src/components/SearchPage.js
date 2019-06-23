import React from "react";
import { WithAuth, WithMovies } from "../containers";

class SearchView extends React.Component {

  render() {
    return (
      <div>
        <button
          onClick={e => {
            this.props.fetchingMovies();
          }}
        >
          search movies
        </button>
      </div>
    );
  }
}
export const SearchPage = WithMovies(WithAuth(SearchView));
