import { call, put, takeLatest } from 'redux-saga/effects'
import {
  GET_TODAY_FORECAST,
  GET_NEXT_DAY_FORECAST,
  GET_WEEK_FORECAST,
  GET_MONTH_FORECAST
} from '../constants';
import {
  loadForecastListFailure,
  loadForecastListPending,
  loadForecastListSuccess
} from '../actions';
import { fetchApi, buildApiUrl } from '../utils.js';

function* loadForecastList(action) {
  try {
    yield put(loadForecastListPending());

    const url = yield call(buildApiUrl, action.payload);
    const data = yield call(fetchApi, url);

    yield put(loadForecastListSuccess(data));
  } catch (e) {
    yield put(loadForecastListFailure(e));
  }
}

function* watchForecastListChange() {
  yield takeLatest([GET_TODAY_FORECAST, GET_NEXT_DAY_FORECAST, GET_WEEK_FORECAST, GET_MONTH_FORECAST], loadForecastList);
}

export default watchForecastListChange;
