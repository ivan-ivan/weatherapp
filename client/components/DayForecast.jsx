import React from 'react';
import PropTypes from 'prop-types';

const DayForecast = (props) => {
  return (<section className="day-forecast">
    <div className="day-forecast-label">
      <span>The weather in your city:</span>
    </div>
    <div className="day-forecast-temp">
      <div className="midday-temp">
        <span>midday temperature is {props.forecast.temp.day}</span>
      </div>
      <div className="night-temp">
        <span>night temperature is {props.forecast.temp.night}</span>
      </div>
    </div>
    <div className="day-forecast-wind">
      <span>wind speed is {props.forecast.speed}</span>
    </div>
  </section>);
};

DayForecast.propTypes = {
  forecast: PropTypes.object
};

export default DayForecast;
