import React from "react";
import { WithAuth, WithMovies } from "../containers";

class SearchView extends React.Component {
  render() {
    return (
      <div>
        <label>
          Search Term
          <input
            type="text"
            name="movie-search"
            value={this.props.searchTerm}
            onChange={e =>
              this.props.changeSearchTerm({ query: e.target.value })
            }
          />
          <button onClick={e => this.props.fetchingMovies()}>Search</button>
        </label>

        {this.props.movies && (
          <ul>
            {this.props.movies.map(movie => (
              <li>movie.name</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export const SearchPage = WithMovies(WithAuth(SearchView));
