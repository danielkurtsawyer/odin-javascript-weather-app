import {format} from "date-fns";

// returns a json object containing a forecast object which contains an Array called forecastday with each day's forecast information 
const loadForecastPromise = function getForecastWeatherDataPromise(key, q, days) {
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${q}&days=${days}`, {mode: 'cors'})
  .then((response) => response.json())
  .then((response) => {console.log(response.forecast.forecastday)});
  // for each loop on the array of forecast days, updating each day's information on the front-end
}

// refactored to use async/await
const loadForecast = async function getForecastWeatherData(key, q, days, celsius) {
  console.log(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${q}&days=${days}`);
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${q}&days=${days}`, {mode: 'cors'});
  const weatherData = await response.json();

  // extract location data
  const name = weatherData.location.name;
  const region = weatherData.location.region;

  // extract forecast data for each day
  // may want to use an object to store this data, sending an array of each day object to the DOMController 
  weatherData.forecast.forecastday.forEach((day) => {
    const date = day.date;
    // this will need to be reformatted with a date manipulation module like date-fns like so:
    console.log(date.split('-'));
    console.log(format(new Date(date.split('-')), 'EEEE, MMM d y'));

    let max_temp = null;
    let min_temp = null;

    if(celsius){
      max_temp = day.day.maxtemp_c;
      min_temp = day.day.mintemp_c;
    } else{
      max_temp = day.day.maxtemp_f;
      min_temp = day.day.mintemp_f;
    }

    const condition = day.day.condition;
    
    // console.log(date, max_temp, min_temp, condition);
  });
}

export default loadForecast;
