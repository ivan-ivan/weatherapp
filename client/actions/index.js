import {
  GET_TODAY_FORECAST,
  GET_NEXT_DAY_FORECAST,
  GET_WEEK_FORECAST,
  GET_MONTH_FORECAST,
  LOAD_FORECAST_LIST_PENDING,
  LOAD_FORECAST_LIST_SUCCESS,
  LOAD_FORECAST_LIST_FAILURE
} from '../constants';

export function getTodayForecast() {
  return {
    type: GET_TODAY_FORECAST,
    payload: 1
  }
}

export function getNextDayForecast() {
  return {
    type: GET_NEXT_DAY_FORECAST,
      payload: 2
  }
}

export function getWeekForecast() {
  return {
    type: GET_WEEK_FORECAST,
    payload: 5
  }
}

export function getMonthForecast() {
  return {
    type: GET_MONTH_FORECAST,
    payload: 17
  }
}

export function loadForecastListPending() {
  return {
    type: LOAD_FORECAST_LIST_PENDING
  };
}

export function loadForecastListSuccess(data) {
  return {
    type: LOAD_FORECAST_LIST_SUCCESS,
    payload: data
  };
}

export function loadForecastListFailure(err) {
  return {
    type: LOAD_FORECAST_LIST_FAILURE,
    error: err
  };
}
