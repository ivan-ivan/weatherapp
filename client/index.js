import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter, Route } from 'react-router-dom';
import reducer from './reducers';
import watchForecastListChange from './sagas'
import App from './containers/App.jsx';
import style from './styles.scss';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchForecastListChange);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);