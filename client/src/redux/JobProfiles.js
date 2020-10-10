
import * as ActionTypes from './ActionTypes';

export const JobProfiles = (state = { isLoading: true,
    errMess: null,
    jobProfiles:[]}, action) => {
    switch (action.type) {
        case ActionTypes.GET_JOB_PROFILES:
            return {...state, isLoading: false, errMess: null, jobProfiles: action.payload};

        case ActionTypes.GET_JOB_PROFILES_LOADING:
            return {...state, isLoading: true, errMess: null, jobProfiles: []}

        case ActionTypes.GET_JOB_PROFILES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};