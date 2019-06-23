import React from "react";
import { WithAuth, WithMovies } from "../containers";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";

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
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Poster</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Release Date</TableCell>
                <TableCell align="right">Rating</TableCell>
                <TableCell align="right">Language</TableCell>
                <TableCell align="right">Add to List</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.movies.map(movie => (
                <TableRow key={movie.id}>
                  <TableCell component="th" scope="row">
                    <Avatar
                      src={`https://image.tmdb.org/t/p/w500/${
                        movie.poster_path
                      }`}
                    />
                  </TableCell>
                  <TableCell align="right">{movie.title}</TableCell>
                  <TableCell align="right">{movie.release_date}</TableCell>
                  <TableCell align="right">{movie.vote_average}</TableCell>
                  <TableCell align="right">{movie.original_language}</TableCell>
                </TableRow>
              ))}
            </TableBody>
              <TablePagination
                page={this.props.currentPage - 1}
                rowsPerPageOptions={[20]}
                rowsPerPage={20}
                count={this.props.totalResults}
                onChangePage={(event, page) =>
                  this.props.fetchingMovies({ page: page })
                }
              />
          </Table>
        )}
      </div>
    );
  }
}
export const SearchPage = WithMovies(WithAuth(SearchView));
