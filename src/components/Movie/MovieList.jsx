import PropTypes from "prop-types";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.array,
};
