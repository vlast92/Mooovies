import React from "react";
import {shallow} from 'enzyme';

import Search from "./Search";
import LoadIndicator from "./LoadIndicator";
import VisibleSearchResults from "../containers/VisibleSearchResults";

describe('Search --- Shallow render component', () => {

    let component;
    const searchText = "Blade runner",
        onSearchInputChange = jest.fn(),
        onMakingSearchRequest = jest.fn(),
        searchResults = {
            Response: "False",
            Error: "Movie not found!"
        };

    beforeEach(() => {

        jest.useFakeTimers();
        component = shallow(
            <Search loading={false} searchInputValue={searchText} searchResults={searchResults}
                    onSearchInputChange={onSearchInputChange} onMakingSearchRequest={onMakingSearchRequest}/>
        );
    });

    test('renders without crashing', () => {

        expect(component.length).toEqual(1);
    });

    test('search contains search text', () => {

        expect(component.find('input[name="searchInput"]').prop('value')).toEqual(searchText);
    });

    test("contain search results container", () => {

        expect(component.find(VisibleSearchResults).length).toBe(1);
    });

    test("dont show search result when it's empty", () => {

        let component = shallow(
            <Search searchInputValue={searchText} searchResults={{}} onSearchInputChange={onSearchInputChange}
                    onMakingSearchRequest={onMakingSearchRequest}/>
        );
        expect(component.find('input[name="searchInput"]').hasClass('show-results')).toEqual(false);
    });

    test("open search result when it's not empty", () => {

        expect(component.find('input[name="searchInput"]').hasClass('show-results')).toEqual(true);
    });

    test("loading component dont rendered", () => {

        expect(component.find(LoadIndicator).length).toBe(0);
    });

    test("show loading component when the loading prop set to true", () => {

        let component = shallow(
            <Search searchInputValue={searchText} loading={true} onSearchInputChange={onSearchInputChange}
                    onMakingSearchRequest={onMakingSearchRequest}/>
        );

        expect(component.find(LoadIndicator).length).toBe(1);
    });

    test("check onChange callback", () => {

        const searchInput = shallow(
                <Search searchInputValue={searchText}
                        onSearchInputChange={onSearchInputChange}
                        onMakingSearchRequest={onMakingSearchRequest}
                />
            ).find('input[name="searchInput"]');

        searchInput.simulate("change", {
            target: {value: searchText}
        });

        expect(onMakingSearchRequest).not.toBeCalled();
        expect(onSearchInputChange).toHaveBeenCalledWith(searchText);

        jest.runAllTimers();

        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(onMakingSearchRequest).toHaveBeenCalledWith(searchText);
        expect(onMakingSearchRequest).toHaveBeenCalledTimes(1);
    });
});