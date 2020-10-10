
import * as ActionTypes from './ActionTypes';

export const Jobs = (state = { isLoading: true,
    errMess: null,
    jobs:[]}, action) => {
    switch (action.type) {
        case ActionTypes.GET_JOBS:
            return {...state, isLoading: false, errMess: null, jobs: action.payload};

        case ActionTypes.GET_JOBS_LOADING:
            return {...state, isLoading: true, errMess: null, jobs: []}

        case ActionTypes.GET_JOBS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};

export const Internships = (state = { isLoading: true,
    errMess: null,
    internship:[]}, action) => {
    switch (action.type) {
        case ActionTypes.GET_JOBS:
            return {...state, isLoading: false, errMess: null, internship: action.payload};

        case ActionTypes.GET_JOBS_LOADING:
            return {...state, isLoading: true, errMess: null, internship: []}

        case ActionTypes.GET_JOBS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};