import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MovieCardShort.scss';

function MovieCardShort(props) {
	const { movie, onClick } = props;

	return (
		<Link
			to={`/movie-details/${movie.imdbID}`}
			onClick={onClick}
			className="Movie-card-short grid align-items-center"
			key={movie.imdbID}>
			{movie.Poster !== 'N/A' ? (
				<div className="movie-poster">
					<img src={movie.Poster} alt={movie.Title} />
				</div>
			) : (
				''
			)}
			<div className="movie-info">
				<div className="movie-title">{movie.Title}</div>
				<div className="movie-year">Year: {movie.Year}</div>
			</div>
		</Link>
	);
}

export default MovieCardShort;

MovieCardShort.propTypes = {
	movie: PropTypes.object.isRequired,
	onClick: PropTypes.func,
};
