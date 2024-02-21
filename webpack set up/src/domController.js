import loadForecast from "./loadForecast.js";
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

  const searchBar = document.createElement('input');
  searchBar.setAttribute('type', 'text');
  
  const location = document.createElement('div');
  location.classList.add('location');

  // temp value
  location.textContent = 'Pittsburgh, Pennsylvania';

  // append to the userInputDiv
  userInputDiv.appendChild(searchBar);
  userInputDiv.appendChild(location);

  // append userInputDiv to the main-wrapper
  main.appendChild(userInputDiv);
}

export {pageLoad};