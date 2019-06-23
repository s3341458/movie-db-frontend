import { connect } from "react-redux";
import { movies } from "../reduxStore";


const mapStateToProps = state => {
  return {...state.movies}
};

const mapDispatchToProps = {
  changeSearchTerm: movies.actions.changeSearchTerm,
  fetchingMovies: movies.actions.fetchingMovies,
  receivedMovies: movies.actions.receivedMovies,
};

export const WithMovies = connect(
  mapStateToProps,
  mapDispatchToProps
)
