const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  const towns = jsonObject['towns'];

  const town = towns.filter(town => town.name == 'Preston' || town.name == 'Soda Springs' || town.name == "Fish Haven");
  
  town.forEach(town => {
    let box = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let par1 = document.createElement('p');
    let par2 = document.createElement('p');
    let par3 = document.createElement('p');
    let img = document.createElement('img');

    h2.textContent = town.name;
    box.appendChild(h2);

    h3.textContent = town.motto;
    box.appendChild(h3);

    par1.textContent = 'Year Founded:' + ' ' + town.yearFounded;
    box.appendChild(par1);

    par2.textContent = 'Population:' + ' ' + town.currentPopulation;
    box.appendChild(par2);

    par3.textContent = 'Annual Rain Fall:' + ' ' + town.averageRainfall;
    box.appendChild(par3);

    img.setAttribute('src', town.photo);
    img.setAttribute('alt', town.name);
    box.appendChild(img);

    document.querySelector('div.towns').appendChild(box);
  })

});