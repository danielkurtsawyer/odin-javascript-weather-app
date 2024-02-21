import loadForecast from "./loadForecast.js";
import './style.css';

const pageLoad = () => {
  const header = document.createElement('header');
  header.textContent = 'Project: Weather App';

  const main = document.createElement('div');
  main.classList.add('main-wrapper');

  const footer = document.createElement('footer');

  document.body.appendChild(header);
  document.body.appendChild(main);
  document.body.appendChild(footer);

  const copyright = document.createElement('span');
  copyright.textContent = 'Copyright 2024 Daniel Sawyer ';

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/danielkurtsawyer/odin-javascript-weather-app';
  githubLink.textContent = 'GitHub';
  githubLink.setAttribute('target', '_blank');
  githubLink.setAttribute('rel', 'noopener noreferrer')
  
  footer.appendChild(copyright);
  footer.appendChild(githubLink);
}

export {pageLoad};