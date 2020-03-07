import React from "react";
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';

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
            ratings = <ul>
                {
                    movieInfo.Ratings.map(rating =>
                        <li key={rating.Source}>{rating.Source} : {rating.Value}</li>)
                }</ul>;
        }

        return (
            <div className="movie-card-full">
                {
                    movieLoading ?
                        "Loading movie info..." :
                        <div className="card-content">
                            {movieInfo.Error ? `Error: ${movieInfo.Error}` :
                                <>
                                    <div className="card-head">
                                        {movieInfo.Poster !== 'N/A' ?
                                            <div className="poster">
                                                <img src={movieInfo.Poster} alt={movieInfo.Title}/>
                                            </div> : ''}
                                        <div>
                                            <h1>{movieInfo.Title}</h1>
                                            <ul>
                                                <li>
                                                    Year: {movieInfo.Year}
                                                </li>
                                                <li>
                                                    Released: {movieInfo.Released}
                                                </li>
                                                <li>
                                                    Country: {movieInfo.Country}
                                                </li>
                                                <li>
                                                    Genre: {movieInfo.Genre}
                                                </li>
                                                <li>
                                                    Runtime: {movieInfo.Runtime}
                                                </li>
                                                <li>
                                                    Production: {movieInfo.Production}
                                                </li>
                                                <li>
                                                    Director: {movieInfo.Director}
                                                </li>
                                                <li>
                                                    Writer: {movieInfo.Writer}
                                                </li>
                                                <li>
                                                    Actors: {movieInfo.Actors}
                                                </li>
                                                <li>
                                                    Awards: {movieInfo.Awards}
                                                </li>
                                                {ratings ?
                                                    <li>
                                                        Ratings:
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