const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  const prophets = jsonObject['prophets'];
  for (let i = 0; i < prophets.length; i++ ) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let par1 = document.createElement('p');
    let par2 = document.createElement('p');
    let image = document.createElement('img');

    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    card.appendChild(h2);

    par1.textContent = 'Date of Birth:' + ' ' + prophets[i].birthdate;
    card.appendChild(par1);

    par2.textContent = 'Place of Birth:' + ' ' + prophets[i].birthplace;
    card.appendChild(par2);

    image.setAttribute('src', prophets[i].imageurl);
    image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i + 1]);
    card.appendChild(image);

    document.querySelector('div.cards').appendChild(card);
}
});