import React from 'react';
import PropTypes from 'prop-types';
import componentStyles from './Search.module.scss';

import SearchResultsContainer from './SearchResultsContainer';
import LoadIndicator from '../../LoadIndicator';

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timeoutFunctionId: 0,
		};
	}

	handleSearchInputChange = event => {
		if (this.state.timeoutFunctionId) {
			clearTimeout(this.state.timeoutFunctionId);
		}

		const searchInputValue = event.target.value,
			timeoutFunctionId = setTimeout(() => {
				if (this.props.searchInputValue) {
					this.props.onMakingSearchRequest(this.props.searchInputValue);
				}

				this.setState({
					timeoutFunctionId: 0,
				});
			}, 500);

		this.props.onSearchInputChange(searchInputValue);
		if (
			this.props.searchResults &&
			Object.keys(this.props.searchResults).length > 0
		)
			this.props.onClearSearchResults();

		this.setState({
			timeoutFunctionId: timeoutFunctionId,
		});
	};

	render() {
		return (
			<>
				<div className={componentStyles.component}>
					<div className={componentStyles.content}>
						<div className={componentStyles.inputWrap}>
							<input
								name="searchInput"
								aria-label="search-box"
								onChange={this.handleSearchInputChange}
								value={this.props.searchInputValue}
								placeholder="What would you like to find?"
								autoComplete="off"
								className={
									this.props.searchResults &&
									Object.keys(this.props.searchResults).length > 0
										? 'show-results'
										: ''
								}
							/>
							{this.props.loading ? (
								<div className={componentStyles.loadIndicatorOuter}>
									<LoadIndicator />
								</div>
							) : (
								''
							)}
						</div>
						<SearchResultsContainer />
					</div>
				</div>
			</>
		);
	}
}

Search.propTypes = {
	loading: PropTypes.bool,
	searchInputValue: PropTypes.string.isRequired,
	searchResults: PropTypes.object,
	onSearchInputChange: PropTypes.func.isRequired,
	onMakingSearchRequest: PropTypes.func.isRequired,
	onClearSearchResults: PropTypes.func,
};
