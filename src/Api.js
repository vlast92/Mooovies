//Based on http://www.omdbapi.com/

const Api = {
	apiKey: '57a9d5d1',
	search: function(searchWords) {
		return this.fetch(`&s=${searchWords}&type=movie`);
	},
	getMovie: function(imdbID) {
		return this.fetch(`&i=${imdbID}&plot=full`);
	},
	fetch: function(requestParams) {
		function status(response) {
			if (response.status >= 200 && response.status < 300) {
				return Promise.resolve(response);
			} else if (response.status === 401) {
				return Promise.reject(new Error('Invalid API key'));
			} else {
				return Promise.reject(
					new Error('Invalid response from server. Please, try again later.')
				);
			}
		}

		return fetch(
			`http://www.omdbapi.com/?apikey=${this.apiKey}${requestParams}`,
			{
				method: 'get',
				credentials: 'same-origin',
			}
		)
			.then(status)
			.then(response => response.json())
			.then(response => {
				return { serverResponse: response, requestError: '' };
			})
			.catch(error => {
				return { serverResponse: '', requestError: error.message };
			});
	},
};

export default Api;
