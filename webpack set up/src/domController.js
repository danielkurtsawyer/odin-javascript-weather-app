import loadForecast from "./loadForecast.js";
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

  // temp value
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
  githubLink.setAttribute('rel', 'noopener noreferrer')
  
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

  const searchIcon = new Image();
  searchIcon.src = magGlass;

  searchDiv.appendChild(searchBar);
  searchDiv.appendChild(searchIcon);

  const location = document.createElement('div');
  location.classList.add('location');

  // temp value
  location.textContent = 'Pittsburgh, Pennsylvania';

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

    dateDiv.textContent = 'Thursday, Feb 8 2024';
    tempDiv.textContent = '54° F';
    conditionImg.src = raindrop;
    precipitationValue.textContent = '0%';

    // append card to the forecastDiv
    forecastDiv.appendChild(card);
  }
}

export {pageLoad};