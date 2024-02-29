import {loadForecast, extractData} from "./loadForecast.js";
import * as DOMController from "./domController.js";

DOMController.pageLoad();
DOMController.updateWeather('Pittsburgh', false);