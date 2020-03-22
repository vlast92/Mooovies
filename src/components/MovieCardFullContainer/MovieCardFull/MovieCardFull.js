import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import baseStyles from '../../../scss/Base.module.scss';
import gridStyles from '../../../scss/Grid.module.scss';
import componentStyle from './MovieCardFull.module.scss';

import LoadIndicator from '../../LoadIndicator';

class MovieCardFull extends React.Component {
	componentDidMount() {
		this.props.onMakingGetMovieRequest(this.props.match.params.imdbID);
	}

	componentDidUpdate = prevProps => {
		const { imdbID } = this.props.match.params;

		if (imdbID !== prevProps.match.params.imdbID) {
			this.props.onMakingGetMovieRequest(imdbID);
		}
	};

	componentWillUnmount() {
		this.props.onComponentUnmount();
	}

	render() {
		const { movieInfo, movieLoading } = this.props;
		let ratings;

		if (movieInfo.Ratings) {
			ratings = (
				<ul className={componentStyle.ratingsList}>
					{movieInfo.Ratings.map(rating => (
						<li key={rating.Source}>
							{rating.Source} : {rating.Value}
						</li>
					))}
				</ul>
			);
		}

		return (
			<div className={componentStyle.component}>
				<div className={baseStyles.container}>
					{movieLoading ? (
						<LoadIndicator text="Loading movie info..." />
					) : (
						<div>
							{movieInfo.Error ? (
								<div className={baseStyles.error}>Error: {movieInfo.Error}</div>
							) : (
								<>
									<div className={gridStyles.flex}>
										{movieInfo.Poster !== 'N/A' ? (
											<div
												className={`${componentStyle.poster} ${gridStyles.size25}`}>
												<img src={movieInfo.Poster} alt={movieInfo.Title} />
											</div>
										) : (
											''
										)}
										<div
											className={`${componentStyle.info} ${gridStyles.sizeAuto}`}>
											<h1>{movieInfo.Title}</h1>
											<ul className={componentStyle.infoList}>
												<li>
													<span className={componentStyle.label}>Year:</span>{' '}
													{movieInfo.Year}
												</li>
												<li>
													<span className={componentStyle.label}>
														Released:
													</span>{' '}
													{movieInfo.Released}
												</li>
												<li>
													<span className={componentStyle.label}>Country:</span>{' '}
													{movieInfo.Country}
												</li>
												<li>
													<span className={componentStyle.label}>Genre:</span>{' '}
													{movieInfo.Genre}
												</li>
												<li>
													<span className={componentStyle.label}>Runtime:</span>{' '}
													{movieInfo.Runtime}
												</li>
												<li>
													<span className={componentStyle.label}>
														Production:
													</span>{' '}
													{movieInfo.Production}
												</li>
												<li>
													<span className={componentStyle.label}>
														Director:
													</span>{' '}
													{movieInfo.Director}
												</li>
												<li>
													<span className={componentStyle.label}>Writer:</span>{' '}
													{movieInfo.Writer}
												</li>
												<li>
													<span className={componentStyle.label}>Actors:</span>{' '}
													{movieInfo.Actors}
												</li>
												<li>
													<span className={componentStyle.label}>Awards:</span>{' '}
													{movieInfo.Awards}
												</li>
												{ratings ? (
													<li>
														<span className={componentStyle.label}>
															Ratings:
														</span>
														{ratings}
													</li>
												) : (
													''
												)}
											</ul>
										</div>
									</div>
									<div className={componentStyle.plot}>{movieInfo.Plot}</div>
								</>
							)}
						</div>
					)}
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
	onComponentUnmount: PropTypes.func,
};
