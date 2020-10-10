
import * as ActionTypes from './ActionTypes';

export const Products = (state = { isLoading: true,
    errMess: null,
    products:[]}, action) => {
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS:
            return {...state, isLoading: false, errMess: null, products: action.payload};

        case ActionTypes.GET_PRODUCTS_LOADING:
            return {...state, isLoading: true, errMess: null, products: []}

        case ActionTypes.GET_PRODUCTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};

export const LaunchedToday = (state = { isLoading: true,
    errMess: null,
    todayLaunch:[]}, action) => {
    switch (action.type) {
        case ActionTypes.GET_TODAY_LAUNCH:
            return {...state, isLoading: false, errMess: null, todayLaunch: action.payload};

        case ActionTypes.GET_TODAY_LAUNCH_LOADING:
            return {...state, isLoading: true, errMess: null, todayLaunch: []}

        case ActionTypes.GET_TODAY_LAUNCH_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};

export const TrendingProducts = (state = { isLoading: true,
    errMess: null,
    trending:[]}, action) => {
    switch (action.type) {
        case ActionTypes.GET_TRENDING_PRODUCTS:
            return {...state, isLoading: false, errMess: null, trending: action.payload};

        case ActionTypes.GET_TRENDING_PRODUCTS_LOADING:
            return {...state, isLoading: true, errMess: null, trending: []}

        case ActionTypes.GET_TRENDING_PRODUCTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};