import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import gridStyles from '../../scss/Grid.module.scss';
import componentStyles from './MovieCardShort.module.scss';

function MovieCardShort(props) {
	const { movie, onClick } = props;

	return (
		<Link
			to={`/movie-details/${movie.imdbID}`}
			onClick={onClick}
			className={`${componentStyles.component} ${gridStyles.flex} ${gridStyles.alignItemsCenter}`}
			key={movie.imdbID}>
			{movie.Poster !== 'N/A' ? (
				<div className={componentStyles.poster}>
					<img src={movie.Poster} alt={movie.Title} />
				</div>
			) : (
				''
			)}
			<div className={componentStyles.info}>
				<div className={componentStyles.title}>{movie.Title}</div>
				<div className={componentStyles.year}>Year: {movie.Year}</div>
			</div>
		</Link>
	);
}

export default MovieCardShort;

MovieCardShort.propTypes = {
	movie: PropTypes.object.isRequired,
	onClick: PropTypes.func,
};
