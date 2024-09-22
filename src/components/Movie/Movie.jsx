import PropTypes from "prop-types";

const Movie = ({ movie }) => {
  return (
    <div
      key={movie.id}
      className="relative transform transition-transform duration-300 hover:scale-105"
      style={{ minWidth: "250px" }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg shadow-lg w-full object-cover"
        style={{ minHeight: "370px" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
        <h2 className="text-white text-2xl font-bold mb-1">{movie.title}</h2>
        <p className="text-gray-300 text-xs mb-2 line-clamp-3">
          {movie.overview}
        </p>
        <p className="text-gray-400 text-xs">
          Release Date: {movie.release_date}
        </p>
        <p className="text-gray-400 text-xs mb-4">
          Rating: {movie.vote_average} ({movie.vote_count} votes)
        </p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-500 transition-colors">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default Movie;

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};
