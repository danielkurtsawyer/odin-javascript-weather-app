import {loadForecast} from "./loadForecast.js";
import magGlass from './img/search.svg';
import raindrop from './img/raindrop.svg';
import './style.css';

const pageLoad = () => {
  // create header
  const header = document.createElement('header');

  // create main div to wrap content
  const main = document.createElement('div');
  main.classList.add('main-wrapper');

  // create footer
  const footer = document.createElement('footer');

  // append to body
  document.body.appendChild(header);
  document.body.appendChild(main);
  document.body.appendChild(footer);

  // add info to header
  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = 'Project: Weather App';

  const tempUnit = document.createElement('div');
  tempUnit.classList.add('temp-unit');

  const fahrenheit = document.createElement('div');
  fahrenheit.classList.add('temp-fahrenheit');
  fahrenheit.textContent = '°F'
  fahrenheit.classList.add('selected');

  const celsius = document.createElement('div');
  celsius.classList.add('temp-celsius');
  celsius.textContent = '°C';

  tempUnit.appendChild(fahrenheit);
  tempUnit.appendChild(celsius);

  // append to header
  header.appendChild(title);
  header.appendChild(tempUnit);

  // add information to footer
  const copyright = document.createElement('span');
  copyright.textContent = 'Copyright 2024 Daniel Sawyer ';

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/danielkurtsawyer/odin-javascript-weather-app';
  githubLink.textContent = 'GitHub';
  githubLink.setAttribute('target', '_blank');
  githubLink.setAttribute('rel', 'noopener noreferrer');
  
  // append to footer
  footer.appendChild(copyright);
  footer.appendChild(githubLink);

  // create search bar and location div
  const userInputDiv = document.createElement('div');
  userInputDiv.classList.add('user-input');

  const searchDiv = document.createElement('div');
  searchDiv.classList.add('search-wrapper');


  const searchBar = document.createElement('input');
  searchBar.setAttribute('type', 'text');
  searchBar.setAttribute('name', 'query');
  // Initialize value
  searchBar.value = 'Pittsburgh';

  const searchIcon = new Image();
  searchIcon.src = magGlass;

  searchDiv.appendChild(searchBar);
  searchDiv.appendChild(searchIcon);

  const location = document.createElement('div');
  location.classList.add('location');

  // append to the userInputDiv
  userInputDiv.appendChild(searchDiv);
  userInputDiv.appendChild(location);

  // append userInputDiv to the main-wrapper
  main.appendChild(userInputDiv);

  // create the display div
  const forecastDisplay = document.createElement('div');
  forecastDisplay.classList.add('forecast-display');
  
  // append forecastDisplay to main-wrapper
  main.appendChild(forecastDisplay);

  // create the forecast div 
  const forecastDiv = document.createElement('div');
  forecastDiv.classList.add('forecast-wrapper');

  // append forecastDiv to forecastDisplay
  forecastDisplay.appendChild(forecastDiv);

  // create the cards for each individual day - 3 days total
  for(let i = 0; i<3; i++){
    // create card
    const card = document.createElement('div');
    card.classList.add(`day${i}`);

    // div to hold the date
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date');

    // div to hold the temp
    const tempDiv = document.createElement('div');
    tempDiv.classList.add('temp');

    // div to hold the low
    const tempLow = document.createElement('div');
    tempLow.classList.add('temp-low');

    // div to hold the hi
    const tempHigh = document.createElement('div');
    tempHigh.classList.add('temp-high');

    // append children to tempdiv
    tempDiv.appendChild(tempLow);
    tempDiv.appendChild(tempHigh);
    
    // div to hold the condition div
    const conditionImg = document.createElement('img');
    conditionImg.classList.add('condition');

    // wrappere div to hold precipitation
    const precipitationDiv = document.createElement('div');
    precipitationDiv.classList.add('precip-wrapper');
    // img element
    const precipitationImg = new Image();
    precipitationImg.src = raindrop;
    // div to hold the chance of rain
    const precipitationValue = document.createElement('div');
    precipitationValue.classList.add('precip');

    // append children to precipitation div
    precipitationDiv.appendChild(precipitationImg);
    precipitationDiv.appendChild(precipitationValue);

    // append all children to the main card div
    card.appendChild(dateDiv);
    card.appendChild(tempDiv);
    card.appendChild(conditionImg);
    card.appendChild(precipitationDiv);

    // append card to the forecastDiv
    forecastDiv.appendChild(card);
  }

  // add event listeners 
  // event listener for changing temp 
  fahrenheit.addEventListener('click', () => {
    if(fahrenheit.classList.contains('selected')){
      console.log('this choice is already selected. Do nothing');
    } else {
      console.log('DO something!');
      // if the fahrenheit option is not selected already, we have to update the selections
      celsius.classList.remove('selected');
      fahrenheit.classList.add('selected');

      // and then we have to update the weather data to find the correct temp unit
      updateWeather(searchBar.value, false);
    }
  });
  celsius.addEventListener('click', () => {
    if(celsius.classList.contains('selected')){
      console.log('this choice is already selected. Do nothing');
    } else {
      console.log('DO something!');
      // if the celsius option is not selected already, we have to update the selections
      fahrenheit.classList.remove('selected');
      celsius.classList.add('selected');

      // and then we have to update the weather data to find the correct temp unit
      updateWeather(searchBar.value, true);
    }
  });

  // event listener for new query
  searchIcon.addEventListener('click', () => {
    updateWeather(searchBar.value, celsius.classList.contains('selected'), location.textContent);
    location.textContent = '';
    location.classList.add('loader');
  })
}

const updateWeather = async (query, celsius, oldLocation) => {
  const weatherData = await loadForecast('d2491c9705b6473dba6190239243001', query, 3, celsius);
  console.log(weatherData);

  const location = document.querySelector('.location');
  location.classList.remove('loader');

  // catch any invalid locations
  if(weatherData === 'error'){
    alert('Please enter a valid location');
    location.textContent = oldLocation;
    return;
  }

  location.textContent = `${weatherData.name}, ${weatherData.region}`;

  weatherData.dayArray.forEach((day, index) => {
    // formattedDate, max_temp, min_temp, condition
    const date = document.querySelector(`.day${index} .date`);
    const tempHigh = document.querySelector(`.day${index} .temp-high`);
    const tempLow = document.querySelector(`.day${index} .temp-low`);
    const conditionImg = document.querySelector(`.day${index} .condition`);
    const precipValue = document.querySelector(`.day${index} .precip`);

    date.textContent = day.formattedDate;
    tempHigh.textContent = day.max_temp;
    tempLow.textContent = day.min_temp;

    if(celsius){
      tempHigh.textContent += '° C';
      tempLow.textContent += '° C';
    } else {
      tempHigh.textContent += '° F';
      tempLow.textContent += '° F';
    }
    conditionImg.src = day.condition.icon;
    conditionImg.alt = day.condition.text; 
    precipValue.textContent = `${day.precip}%`;
  })
}

export {pageLoad, updateWeather};