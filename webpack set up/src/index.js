import {loadForecast, extractData} from "./loadForecast.js";
import * as DOMController from "./domController.js";

DOMController.pageLoad();
loadForecast('d2491c9705b6473dba6190239243001', 'pittsburgh', 3, false);

DOMController.updateWeather('Pittsburgh');