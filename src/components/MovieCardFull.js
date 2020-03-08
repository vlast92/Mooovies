import React from "react";
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import "../assets/scss/components/MovieCardFull.scss"

import LoadIndicator from "./LoadIndicator";

class MovieCardFull extends React.Component {

    componentDidMount() {

        this.props.onMakingGetMovieRequest(this.props.match.params.imdbID);
    }

    componentDidUpdate = (prevProps) => {

        const {imdbID} = this.props.match.params;

        if (imdbID !== prevProps.match.params.imdbID) {
            this.props.onMakingGetMovieRequest(imdbID);
        }
    };

    componentWillUnmount() {

        this.props.onComponentUnmount();
    }

    render() {
        const {movieInfo, movieLoading} = this.props;
        let ratings;

        if (movieInfo.Ratings) {
            ratings = <ul className="ratings-list">
                {
                    movieInfo.Ratings.map(rating =>
                        <li key={rating.Source}>{rating.Source} : {rating.Value}</li>)
                }</ul>;
        }

        return (
            <div className="Movie-card-full">
                <div className="container">
                    {
                        movieLoading ?
                            <LoadIndicator text="Loading movie info..." /> :
                            <div className="card-content">
                                {movieInfo.Error ? <div className="error">Error: {movieInfo.Error}</div> :
                                    <>
                                        <div className="card-head grid">
                                            {movieInfo.Poster !== 'N/A' ?
                                                <div className="poster size-25">
                                                    <img src={movieInfo.Poster} alt={movieInfo.Title}/>
                                                </div> : ''}
                                            <div className="movie-info size-auto">
                                                <h1>{movieInfo.Title}</h1>
                                                <ul className="info-list">
                                                    <li>
                                                        <span className="info-label">Year:</span> {movieInfo.Year}
                                                    </li>
                                                    <li>
                                                        <span className="info-label">Released:</span> {movieInfo.Released}
                                                    </li>
                                                    <li>
                                                        <span className="info-label">Country:</span> {movieInfo.Country}
                                                    </li>
                                                    <li>
                                                        <span className="info-label">Genre:</span> {movieInfo.Genre}
                                                    </li>
                                                    <li>
                                                        <span className="info-label">Runtime:</span> {movieInfo.Runtime}
                                                    </li>
                                                    <li>
                                                        <span className="info-label">Production:</span> {movieInfo.Production}
                                                    </li>
                                                    <li>
                                                        <span className="info-label">Director:</span> {movieInfo.Director}
                                                    </li>
                                                    <li>
                                                        <span className="info-label">Writer:</span> {movieInfo.Writer}
                                                    </li>
                                                    <li>
                                                        <span className="info-label">Actors:</span> {movieInfo.Actors}
                                                    </li>
                                                    <li>
                                                        <span className="info-label">Awards:</span> {movieInfo.Awards}
                                                    </li>
                                                    {ratings ?
                                                        <li>
                                                            <span className="info-label">Ratings:</span>
                                                            {ratings}
                                                        </li> : ''
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="movie-plot">
                                            {movieInfo.Plot}
                                        </div>
                                    </>}
                            </div>
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(MovieCardFull);

MovieCardFull.propTypes = {
    movieLoading: PropTypes.bool,
    movieInfo: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    onMakingGetMovieRequest: PropTypes.func.isRequired,
    onComponentUnmount: PropTypes.func
};