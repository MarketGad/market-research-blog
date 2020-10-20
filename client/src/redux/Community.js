
import * as ActionTypes from './ActionTypes';

export const Community = (state = { isLoading: true,
    errMess: null,
    posts:[]}, action) => {
    switch (action.type) {
        case ActionTypes.GET_COMMUNITY_POSTS:
            return {...state, isLoading: false, errMess: null, posts: action.payload};

        case ActionTypes.GET_COMMUNITY_POSTS_LOADING:
            return {...state, isLoading: true, errMess: null, posts: []}

        case ActionTypes.GET_COMMUNITY_POSTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};