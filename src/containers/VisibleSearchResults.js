import { connect } from 'react-redux';

import SearchResults from '../components/SearchResults';
import { searchResultsItemClicked } from '../actions';

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

const VisibleSearchResults = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchResults);

export default VisibleSearchResults;
