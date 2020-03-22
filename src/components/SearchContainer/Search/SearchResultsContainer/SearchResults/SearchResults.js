import React from 'react';
import PropTypes from 'prop-types';
import baseStyles from '../../../../../scss/Base.module.scss';
import componentStyles from './SearchResults.module.scss';

import MovieCardShort from '../../../../MovieCardShort';

function SearchResults(props) {
	const { searchResults, onResultItemClick } = props;
	let listContent;

	if (searchResults.Search) {
		listContent = searchResults.Search.map(movie => (
			<MovieCardShort
				key={movie.imdbID}
				movie={movie}
				onClick={onResultItemClick}
			/>
		));
	} else if (searchResults.Error) {
		listContent = (
			<div className={baseStyles.error}>Error: {searchResults.Error}</div>
		);
	}

	return (
		<>
			{listContent ? (
				<div className={componentStyles.component} aria-label="search-results">
					{listContent}
				</div>
			) : (
				''
			)}
		</>
	);
}

export default SearchResults;

SearchResults.propTypes = {
	searchResults: PropTypes.object.isRequired,
	onResultItemClick: PropTypes.func,
};
