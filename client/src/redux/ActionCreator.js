import * as ActionTypes from './ActionTypes';
const BaseURL = process.env.REACT_APP_BASEURL;

export const fetchProducts = () => (dispatch) => {
	dispatch(productsLoading(true));

	return fetch(BaseURL + '/api/productdetails')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errmess = new Error(error.message);
				throw errmess;
			}
		)
		.then((response) => response.json())
		.then((products) => dispatch(addProducts(products)))
		.catch((error) => dispatch(productsFailed(error.message)));
};

export const productsLoading = () => ({
	type: ActionTypes.GET_PRODUCTS_LOADING
});

export const productsFailed = (errmess) => ({
	type: ActionTypes.GET_PRODUCTS_FAILED,
	payload: errmess
});

export const addProducts = (products) => ({
	type: ActionTypes.GET_PRODUCTS,
	payload: products
});

export const fetchJobProfiles = () => (dispatch) => {
	dispatch(jobProfilesLoading(true));

	return fetch(BaseURL + '/api/jobprofiles')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errmess = new Error(error.message);
				throw errmess;
			}
		)
		.then((response) => response.json())
		.then((jobProfiles) => dispatch(addJobProfiles(jobProfiles)))
		.catch((error) => dispatch(jobProfilesFailed(error.message)));
};

export const jobProfilesLoading = () => ({
	type: ActionTypes.GET_JOB_PROFILES_LOADING
});

export const jobProfilesFailed = (errmess) => ({
	type: ActionTypes.GET_JOB_PROFILES_FAILED,
	payload: errmess
});

export const addJobProfiles = (jobProfiles) => ({
	type: ActionTypes.GET_JOB_PROFILES,
	payload: jobProfiles
});

export const fetchTodayLaunch = () => (dispatch) => {
	dispatch(todayLaunchLoading(true));

	return fetch(BaseURL + '/api/hotproducts/recent')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errmess = new Error(error.message);
				throw errmess;
			}
		)
		.then((response) => response.json())
		.then((todayLaunch) => dispatch(addTodayLaunch(todayLaunch)))
		.catch((error) => dispatch(todayLaunchFailed(error.message)));
};

export const todayLaunchLoading = () => ({
	type: ActionTypes.GET_TODAY_LAUNCH_LOADING
});

export const todayLaunchFailed = (errmess) => ({
	type: ActionTypes.GET_TODAY_LAUNCH_FAILED,
	payload: errmess
});

export const addTodayLaunch = (todayLaunch) => ({
	type: ActionTypes.GET_TODAY_LAUNCH,
	payload: todayLaunch
});

export const fetchTrendingProducts = () => (dispatch) => {
	dispatch(trendingProductsLoading(true));

	return fetch(BaseURL + '/api/hotproducts/')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errmess = new Error(error.message);
				throw errmess;
			}
		)
		.then((response) => response.json())
		.then((trendingProducts) => dispatch(addTrendingProducts(trendingProducts)))
		.catch((error) => dispatch(jobProfilesFailed(error.message)));
};

export const trendingProductsLoading = () => ({
	type: ActionTypes.GET_TRENDING_PRODUCTS_LOADING
});

export const trendingProductsFailed = (errmess) => ({
	type: ActionTypes.GET_TRENDING_PRODUCTS_FAILED,
	payload: errmess
});

export const addTrendingProducts = (trendingProducts) => ({
	type: ActionTypes.GET_TRENDING_PRODUCTS,
	payload: trendingProducts
});

export const fetchJobs = () => (dispatch) => {
	dispatch(jobsLoading(true));

	return fetch(BaseURL + '/api/jobs/full-time')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errmess = new Error(error.message);
				throw errmess;
			}
		)
		.then((response) => response.json())
		.then((jobs) => dispatch(addJobs(jobs)))
		.catch((error) => dispatch(jobsFailed(error.message)));
};

export const jobsLoading = () => ({
	type: ActionTypes.GET_JOBS_LOADING
});

export const jobsFailed = (errmess) => ({
	type: ActionTypes.GET_JOBS_FAILED,
	payload: errmess
});

export const addJobs = (jobs) => ({
	type: ActionTypes.GET_JOBS,
	payload: jobs
});

export const fetchInternships = () => (dispatch) => {
	dispatch(jobsLoading(true));

	return fetch(BaseURL + '/api/jobs/internship')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errmess = new Error(error.message);
				throw errmess;
			}
		)
		.then((response) => response.json())
		.then((internships) => dispatch(addInternships(internships)))
		.catch((error) => dispatch(internshipsFailed(error.message)));
};

export const internshipsLoading = () => ({
  type: ActionTypes.GET_INTERNSHIPS_LOADING
});

export const internshipsFailed = (errmess) => ({
  type: ActionTypes.GET_INTERNSHIPS_FAILED,
  payload: errmess
});

export const addInternships = (jobs) => ({
  type: ActionTypes.GET_INTERNSHIPS,
  payload: jobs
});

export const fetchCommunityPosts = () => (dispatch) => {

    dispatch(postsLoading(true));

    return fetch(BaseURL +'/api/disrupterclub/posts')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(posts => dispatch(addPosts(posts)))
    .catch(error => dispatch(postsFailed(error.message)));
}

export const postsLoading = () => ({
    type: ActionTypes.GET_COMMUNITY_POSTS_LOADING
});

export const postsFailed = (errmess) => ({
    type: ActionTypes.GET_COMMUNITY_POSTS_FAILED,
    payload: errmess
});

export const addPosts = (posts) => ({
    type: ActionTypes.GET_COMMUNITY_POSTS,
    payload: posts.posts
});
