import React from "react";
import {shallow} from 'enzyme';

import SearchResults from "./SearchResults";
import MovieCardShort from "./MovieCardShort";

describe('Testing SearchResult component', () => {

    let component;
    let dummySearchResults = {
        Search: [
            {
                Title: 'Blade Runner',
                Year: '1982',
                imdbID: 'tt0083658',
                Type: 'movie',
                Poster: 'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg'
            },
            {
                Title: 'Blade Runner 2049',
                Year: '2017',
                imdbID: 'tt1856101',
                Type: 'movie',
                Poster: 'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg'
            }
        ],
        totalResults: '2',
        Response: 'True'
    };

    beforeEach(() => {
        component = shallow(<SearchResults  searchResults={dummySearchResults} />);
    });

    test('renders without crashing', () => {

        expect(component.length).toEqual(1);
    });

    test("contain two MovieCardShort", () => {

        expect(component.find(MovieCardShort).length).toBe(2);
    });

    test("show error message when receive error in searchResults", () => {

        let dummySearchResults = {
            Error: "Movie not found",
            Response: "False"
        };

        component = shallow(<SearchResults  searchResults={dummySearchResults} />);
        expect(component.find(".error").length).toBe(1);
        expect(component.find(".error").text()).toBe(`Error: ${dummySearchResults.Error}`);
    });

    test("dont render search results on empty searchResults", ()=>{

        let dummySearchResults = {};

        component = shallow(<SearchResults  searchResults={dummySearchResults} />);
        expect(component.find(".Search-results").length).toBe(0);
    });
});