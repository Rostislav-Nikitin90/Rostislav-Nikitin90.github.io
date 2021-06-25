const apiURL1 = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=12f91a41bd21c1ca9341109b7e228eab";
fetch(apiURL1)
  .then((response) => response.json())
  .then((jsonObject) => {
    console.log(jsonObject);
    document.getElementById('current-weather-condition-description').textContent = jsonObject.weather[0].description; 
    document.getElementById('current-temp').textContent = jsonObject.main.temp.toFixed(0) + ' °F';
    document.getElementById('humidity').textContent = jsonObject.main.humidity + '%';
    document.getElementById('windspeed').textContent = jsonObject.wind.speed.toFixed(0) + 'mph';
  });

  const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=12f91a41bd21c1ca9341109b7e228eab";
  fetch(apiURL2)
    .then((response) => response.json())
    .then((jsonObject) => {
      console.log(jsonObject);
      const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      const list = jsonObject.list.filter(list => list.dt_txt.includes("18:00:00"));
      console.log(list);
  
      list.forEach(list => {
        let box = document.createElement('section');
        let d = new Date(list.dt_txt);
        let p1 = document.createElement('p');
        let img = document.createElement('img');
        let p2 = document.createElement('p');

        p1.textContent = dayofWeek[d.getDay()];
        box.appendChild(p1);
  
        img.setAttribute('src', "https://openweathermap.org/img/wn/" + list.weather[0].icon + ".png");
        box.appendChild(img);
  
        p2.textContent = list.main.temp.toFixed(0) + ' °F';
        box.appendChild(p2);

        document.querySelector('div.list').appendChild(box);
    });
  
  });