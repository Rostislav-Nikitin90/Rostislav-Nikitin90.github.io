const tempF = document.querySelector('#current-temp').innerHTML;
const speed = document.querySelector('#windspeed').innerHTML;
let f;

if (tempF <= 50 && tempF >= 3) {
  f = 35.74 + (0.6215 * tempF) - 35.75 * (Math.pow(speed, 0.16)) + ((0.4275 * tempF) * (Math.pow(speed, 0.16)));
  document.querySelector('#windchill').innerHTML = f.toFixed(0) + ' °F';
} 

else {
  document.querySelector('#windchill').innerHTML = 'N/A';
}