import React from "react";
import configureStore from 'redux-mock-store'
import {mount} from 'enzyme';
import {Provider} from 'react-redux';

import VisibleSearchResults from "./VisibleSearchResults";
import SearchResults from "../components/SearchResults";
import {
    SEARCH_RESULTS_ITEM_CLICKED,
    searchResultsItemClicked
} from '../actions';

describe('VisibleSearchResults --- REACT-REDUX (Mount + wrapping in <Provider>)', () => {

    const initialState = {
        search: {
            searchResults: {}
        }
    };
    const mockStore = configureStore();
    let store, container;

    beforeEach(() => {

        store = mockStore(initialState);
        container = mount(
            <Provider store={store}>
                <VisibleSearchResults store={store}/>
            </Provider>
        );
    });

    test('renders without crashing', () => {

        expect(container.find(SearchResults).length).toBe(1);
    });

    test('check props matches with initial state', () => {

        expect(container.find(SearchResults).prop("searchResults")).toBe(initialState.search.searchResults);
    });

    test('check actions on dispatch', () => {

        store.dispatch(searchResultsItemClicked());

        const action = store.getActions();

        expect(action[0].type).toBe(SEARCH_RESULTS_ITEM_CLICKED);
    });
});