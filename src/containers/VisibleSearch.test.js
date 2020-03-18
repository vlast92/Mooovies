import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import VisibleSearch from './VisibleSearch';
import Search from '../components/Search';
import {
	MAKING_SEARCH_REQUEST,
	makingSearchRequest,
	CLEAR_SEARCH_RESULTS,
	clearSearchResults,
	SEARCH_INPUT_CHANGE,
	searchInputChange,
} from '../actions';

describe('VisibleSearch --- REACT-REDUX (Mount + wrapping in <Provider>)', () => {
	const initialState = {
		search: {
			searchLoading: false,
			searchInputValue: '',
			searchResults: {},
		},
	};
	const mockStore = configureStore();
	let store, container;

	beforeEach(() => {
		store = mockStore(initialState);
		container = mount(
			<Provider store={store}>
				<VisibleSearch store={store} />
			</Provider>
		);
	});

	test('renders without crashing', () => {
		expect(container.find(Search).length).toBe(1);
	});

	test('check props matches with initial state', () => {
		expect(container.find(Search).prop('loading')).toBe(
			initialState.search.searchLoading
		);
		expect(container.find(Search).prop('searchResults')).toBe(
			initialState.search.searchResults
		);
		expect(container.find(Search).prop('searchInputValue')).toBe(
			initialState.search.searchInputValue
		);
	});

	test('check actions on dispatch', () => {
		const searchWords = 'Blade Runner';

		store.dispatch(searchInputChange(searchWords));
		store.dispatch(makingSearchRequest(searchWords));
		store.dispatch(clearSearchResults());

		const action = store.getActions();

		expect(action[0]).toEqual({
			type: SEARCH_INPUT_CHANGE,
			searchInputValue: searchWords,
		});

		expect(action[1]).toEqual({
			type: MAKING_SEARCH_REQUEST,
			searchWords: searchWords,
		});

		expect(action[2].type).toBe(CLEAR_SEARCH_RESULTS);
	});
});
