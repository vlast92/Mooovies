import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

function MovieCardShort(props) {

    const {movie, onClick} = props;

    return (
        <div className="movies-list-item" key={movie.imdbID}>
            <Link to={`/${movie.imdbID}`} onClick={onClick}>
                { movie.Poster !== 'N/A' ?
                    <img src={movie.Poster} style={{maxWidth: '5rem'}} alt={movie.Title}/> : '' }
                {movie.Title} Year: {movie.Year}
            </Link>
        </div>
    );
}

export default MovieCardShort;

MovieCardShort.propTypes = {
    movie: PropTypes.object.isRequired,
    onClick: PropTypes.func
};