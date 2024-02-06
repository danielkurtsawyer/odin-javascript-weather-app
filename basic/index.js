// returns a json object containing a forecast object which contains an Array called forecastday with each day's forecast information 
const loadForecastPromise = function getForecastWeatherDataPromise(key, q, days) {
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${q}&days=${days}`, {mode: 'cors'})
  .then((response) => response.json())
  .then((response) => {console.log(response.forecast.forecastday)});
  // for each loop on the array of forecast days, updating each day's information on the front-end
}

// refactored to use async/await
const loadForecast = async function getForecastWeatherData(key, q, days) {
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${q}&days=${days}`, {mode: 'cors'});
  const weatherData = await response.json();
  console.log(weatherData.forecast.forecastday);
}

loadForecast('d2491c9705b6473dba6190239243001', 'pittsburgh', 7);

