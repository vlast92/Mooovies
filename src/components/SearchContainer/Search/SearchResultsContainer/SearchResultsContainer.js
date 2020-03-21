import { connect } from 'react-redux';

import SearchResults from './SearchResults';
import { searchResultsItemClicked } from '../../../../actions';

const mapStateToProps = ({ search }) => {
	return {
		searchResults: search.searchResults,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onResultItemClick: () => dispatch(searchResultsItemClicked()),
	};
};

const SearchResultsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchResults);

export default SearchResultsContainer;
