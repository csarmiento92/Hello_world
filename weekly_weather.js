import React from 'react';

const WeeklyWeather = ({ dailyWeather }) => {
  var dailyTemps = dailyWeather;
  let days = ['sun', 'mon', 'tues', 'wed', 'thur', 'fri', 'sat']
  let today = new Date().getDay();
  return (
    // var dailyTemps = dailyWeather;
    dailyTemps.slice(1, 6).map((temp, index) => {
      let dayIndex = (today + index + 1) % 7;

      return (
        <li key={index}>
          {`${days[dayIndex]}: ${temp.temperatureHigh}`}
        </li>
      );

    })
  )
}

export default WeeklyWeather;