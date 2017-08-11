import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DayForecast from '../components/DayForecast.jsx';
import NavPanel from '../components/NavPanel.jsx';
import {
  getTodayForecast,
  getNextDayForecast,
  getWeekForecast,
  getMonthForecast
} from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTodayForecast();
  }

  render() {
    const {
      forecastList,
      ...restNavPanel
    } = this.props;

    return (
      <div className="weather-app">
        <header className="header">
          <span>Weather app</span>
        </header>
        <NavPanel
          {...restNavPanel}
        />
        <section className="main">
          {
            forecastList && forecastList.map(forecast => (
                <DayForecast
                  key={forecast.dt}
                  forecast={forecast}
                />
              )
            )
          }
        </section>
      </div>
    );
  }
}

NavPanel.propTypes = {
  forecastList: PropTypes.arrayOf(PropTypes.object),
  activeTab: PropTypes.string,
  getTodayForecast: PropTypes.func,
  getNextDayForecast: PropTypes.func,
  getWeekForecast: PropTypes.func,
  getMonthForecast: PropTypes.func
};

const mapStateToProps = state => {
  return {
    forecastList: state.forecast,
    activeTab: state.activeTab
  }
};

export default connect(
  mapStateToProps,
  {
    getTodayForecast,
    getNextDayForecast,
    getWeekForecast,
    getMonthForecast
  }
)(App);
