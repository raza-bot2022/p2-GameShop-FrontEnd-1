let apiURL = 'https://www.freetogame.com/api/game?id=';

let BEURL = 'http://13.57.234.28:9090/games/'

document.getElementById('update').onclick = getData;

start();

async function getData() {
    console.log("got here");
    let input = localStorage.getItem("input");
    let num = Number(input);
    console.log(num);
    console.log(Number.isFinite(num));
    // If using input for identifiers, etc.
    // For example, if using PokeAPI, this may be the Pokemon's ID.
    let userInput = document.getElementById('amount').value; 
    let num2 = Number(userInput);
    console.log(Number.isFinite(num2));

    BEURL += input;

    console.log(BEURL);
    console.log(userInput);

    let put = {"game_id": num, "quantity": num2};
    console.log(JSON.stringify(put));

    let resp = await fetch(BEURL, {
    method: 'PUT',
    body:  JSON.stringify(put), 
    headers:new Headers({
        'Content-Type':'application/json'})
    });

    if(resp.status === 200){
        console.log('200');
    }
}

async function start(){

    let input = localStorage.getItem("input");
    console.log(apiURL + input);

// Emptying out the div before inserting new data.
    document.getElementById('data').innerHTML = '';

    let dataSection = document.getElementById('data');

    let response = await fetch(apiURL + input);

    if (response.status === 200) {
        console.log("200 response")
        let data = await response.json();
        localStorage.setItem('data', data);
        populateData(data);
    } else {
        dataSection.innerHTML = 'It Got Away!';
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
}
}

    