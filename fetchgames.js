let apiURL = 'https://www.freetogame.com/api/game?id=';

document.getElementById('getData').onclick = getData;

async function getData() {
    console.log("got here");
    // If using input for identifiers, etc.
    // For example, if using PokeAPI, this may be the Pokemon's ID.
    let userInput = document.getElementById('dataInput').value; 

    localStorage.setItem("input", userInput);

    // Emptying out the div before inserting new data.
    document.getElementById('data').innerHTML = '';

    let dataSection = document.getElementById('data');

    let response = await fetch(apiURL + userInput);

    if (response.status === 200) {
        console.log("200 response")
        let data = await response.json();
        localStorage.setItem('data', data);
        populateData(data);
    } else {
        dataSection.innerHTML = 'It Got Away!';
    }
}


function populateData(response) {
    let dataSection = document.getElementById('data');
    
    let nameTag = document.createElement('h3');
    nameTag.innerHTML = response.title;

    let des = document.createElement('description');
    des.innerHTML = response.short_description;

    let gamePic = document.createElement('img');
    gamePic.src = response.thumbnail;
    dataSection.appendChild(gamePic);

    dataSection.appendChild(nameTag);
    dataSection.appendChild(des);

    let thing = localStorage.getItem('thumbnail');
        console.log(thing);


}

function capitalize(str) {
    if (str)
        return str.charAt(0).toUpperCase() + str.slice(1);
    else
        return '';
}
