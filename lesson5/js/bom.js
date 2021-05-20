const input = document.querySelector('#fav');
const button = document.querySelector('button');
const list = document.querySelector(".list");

button.addEventListener('click', () => {
    let myScripture = input.value;
        input.value = '';
    
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const deleteButton = document.createElement('button');
    
    listItem.appendChild(listText);
    listText.textContent = myScripture; 
    listItem.appendChild(deleteButton); 
    deleteButton.textContent = '❌';
    list.appendChild(listItem);

    deleteButton.addEventListener('click', function() {
        list.removeChild(listItem);
        input.focus();
      });

});
