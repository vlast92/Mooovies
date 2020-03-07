import {connect} from "react-redux"

import {makingGetMovieRequest, clearMovieInfo} from '../actions';
import MovieCardFull from "../components/MovieCardFull";

const mapStateToProps = ({ movie }) => {

    return {
        movieLoading: movie.movieLoading,
        movieInfo: movie.movieInfo
    };
};

const mapDispatchToProps = dispatch => {

    return {
        onMakingGetMovieRequest: imdbID => dispatch(makingGetMovieRequest(imdbID)),
        onComponentUnmount : () => dispatch(clearMovieInfo())
    };
};

const VisibleMovieCardFull = connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieCardFull);

export default VisibleMovieCardFull;