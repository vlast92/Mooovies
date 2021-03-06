import { connect } from 'react-redux';

import {
	makingSearchRequest,
	clearSearchResults,
	searchInputChange,
} from '../../actions';
import Search from './Search';

const mapStateToProps = ({ search }) => {
	return {
		loading: search.searchLoading,
		searchResults: search.searchResults,
		searchInputValue: search.searchInputValue,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSearchInputChange: searchInputValue =>
			dispatch(searchInputChange(searchInputValue)),
		onMakingSearchRequest: movieName =>
			dispatch(makingSearchRequest(movieName)),
		onClearSearchResults: () => dispatch(clearSearchResults()),
	};
};

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
