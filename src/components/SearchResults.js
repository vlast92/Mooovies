import React from "react";
import PropTypes from 'prop-types';

import MovieCardShort from "./MovieCardShort";

function SearchResults(props){

    const {searchResults, onResultItemClick} = props;
    let listContent;

    if(searchResults.Search){
        listContent = searchResults.Search.map(movie => <MovieCardShort key={movie.imdbID} movie={movie} onClick={onResultItemClick} />);
    }else if(searchResults.Error){
        listContent = <span>Error: {searchResults.Error}</span>;
    }

    return (
        <div className="movies-list">
            {listContent}
        </div>
    );
}

export default SearchResults;

SearchResults.propTypes ={
    searchResults: PropTypes.object.isRequired,
    onResultItemClick: PropTypes.func
};