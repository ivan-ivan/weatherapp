import React from 'react';
import PropTypes from 'prop-types';
import {
  GET_TODAY_FORECAST,
  GET_NEXT_DAY_FORECAST,
  GET_WEEK_FORECAST,
  GET_MONTH_FORECAST
} from '../constants';

const NavPanel = ({
  getTodayForecast,
  getNextDayForecast,
  getWeekForecast,
  getMonthForecast,
  activeTab
}) => {
  return (<nav className="navigation-panel">
    <ul>
      <li>
        <button
          className={GET_TODAY_FORECAST === activeTab ? 'active' : ''}
          onClick={getTodayForecast}
        >
          Current day
        </button>
      </li>
      <li>
        <button
          className={GET_NEXT_DAY_FORECAST === activeTab ? 'active' : ''}
          onClick={getNextDayForecast}
        >
          Next day
        </button>
      </li>
      <li>
        <button
          className={GET_WEEK_FORECAST === activeTab ? 'active' : ''}
          onClick={getWeekForecast}
        >
          Next week
        </button>
      </li>
      <li>
        <button
          className={GET_MONTH_FORECAST === activeTab ? 'active' : ''}
          onClick={getMonthForecast}
        >
          Next month
        </button>
      </li>
    </ul>
  </nav>);
};

NavPanel.propTypes = {
  activeTab: PropTypes.string,
  getTodayForecast: PropTypes.func,
  getNextDayForecast: PropTypes.func,
  getWeekForecast: PropTypes.func,
  getMonthForecast: PropTypes.func
};

export default NavPanel;
