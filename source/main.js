/**
 * @module Main
 */

import PaintSample  from "./paint-sample.js";

const body = document.getElementById ('body');
const main = document.getElementById ('main');

/**
 * Initialize page styling
 */
const styles = document.createElement ('link');
styles.rel = 'stylesheet';
styles.setAttribute ('href', './index.css');
document.head.appendChild (styles);

/**
 * Initialize web components
 */
const projectContainer = document.createElement ('div');
projectContainer.setAttribute ('id', 'project-container');
main.appendChild (projectContainer);

const timerProject = new PaintSample();
timerProject.setAttribute ('id', 'timer-project');
timerProject.setAttribute ('class', 'item');
projectContainer.appendChild (timerProject);

// const npsProject = new PaintSample();
// npsProject.setAttribute ('id', 'nps-project');
// npsProject.setAttribute ('class', 'item');
// projectContainer.appendChild (npsProject);



// fetch ('http://ip-api.com/json')
//     .then (res => res.json())
//     .then (response => {
//         console.log ("Country: ", response.country);
//         console.log ("City: ", response.city);
//         console.log ("Timezone: ", response.timezone);
//         console.log ("Lat (", response.lat, ") Lon (", response.lon, ")");
//     })
//     .catch ((data, status) => {
//         console.log('Request failed');
//     })

