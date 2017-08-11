import {
  LOAD_FORECAST_LIST_PENDING,
  LOAD_FORECAST_LIST_SUCCESS,
  LOAD_FORECAST_LIST_FAILURE,
  GET_TODAY_FORECAST,
  GET_NEXT_DAY_FORECAST,
  GET_WEEK_FORECAST,
  GET_MONTH_FORECAST
} from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case GET_TODAY_FORECAST:
      return {
        ...state,
        activeTab: GET_TODAY_FORECAST
      };
    case GET_NEXT_DAY_FORECAST:
      return {
        ...state,
        activeTab: GET_NEXT_DAY_FORECAST
      };
    case GET_WEEK_FORECAST:
      return {
        ...state,
        activeTab: GET_WEEK_FORECAST
      };
    case GET_MONTH_FORECAST:
      return {
        ...state,
        activeTab: GET_MONTH_FORECAST
      };
    case LOAD_FORECAST_LIST_PENDING:
      return {
        ...state,
        loading: true
      };
    case LOAD_FORECAST_LIST_SUCCESS:
      return {
        ...state,
        forecast: action.payload,
        loading: false,
        loaded: true
      };
    case LOAD_FORECAST_LIST_FAILURE:
      return {
        ...state,
        forecast: [],
        loading: false,
        loaded: false
      };
    default:
      return state;
  }
};
