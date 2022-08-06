/*
    FILLED IN FOR USE WITH POKEAPI
*/
// Endpoint you are sending a GET request to
//let apiURL = 'https://pokeapi.co/api/v2/pokemon/';

let apiURL = 'https://www.freetogame.com/api/game?id='; 

//document.getElementById('myAllButton').onclick = getData;

document.getElementById('getData').onclick = getData;

let errorMessage = document.createElement('p');

console.log(apiURL);

//createGameDiv();

// --------------------------------------------------------------

function createGameDiv() {

    // - - - - - - - - NEW SHIT - - - - - - - - - // 

    gamesListDiv.innerHTML = '';

    for(let index = 0; index < 3; index++){

        let temp = document.createElement('div');

        temp.style = 'background-color: blue;';

        let temp2 = document.createElement('img');

        temp2.src = 'https://www.freetogame.com//g//5//thumbnail.jpg'

        temp.appendChild(temp2);

        gamesListDiv.appendChild(temp);

    }


    return;

    // - - - - ---------------------------- - - - //

    guesses.innerHTML = '';

    console.log("GOT HERE NOW!!!");

    for(let index = 0; index < 5; index++){
        console.log("code " + index + ": " + allHexCodes[index]);

        let testing = document.createElement('div');

        //testing.innerHTML = allHexCodes[index];
        testing.style = 'background-color: ' + allHexCodes[index] + ';';

        guesses.appendChild(testing);

        if(allHexCodes[index] == correctHexCode){
            testing.addEventListener('click', correctAnswer);
        }
        else{
            testing.addEventListener('click', incorrectAnswer);
        }

    }

}


// --------------------------------------------------------------

async function getData() {

    let dataSection = document.getElementById('data');

    // If using input for identifiers, etc.
    // For example, if using PokeAPI, this may be the Pokemon's ID.

    let userInput = document.getElementById('dataInput').value; 
    // let userInput = 5;

    // Emptying out the div before inserting new data.
    //document.getElementById('data').innerHTML = '';

    // THIS IS GET REQUEST

    let response = await fetch("https://www.freetogame.com/api/games?category=card");

    //let response = await fetch(apiURL + userInput); 
    
    console.log("https://www.freetogame.com/api/games?category=shooter");
    console.log(apiURL + userInput);

    // OR let response = await fetch({method: 'POST', body:JSON.stringify(myObj), headers: {}});
    // ^ THIS IS POST REQUEST WITH FETCH

    errorMessage.innerHTML = "";

    if (response.status === 200) {
        let data = await response.json(); //same as JSON.parse(response);
        console.log("YESYESYES");
        populateData(data);
    } else {
        //let dataSection = document.getElementById('data');
        errorMessage.innerHTML = "Can't find game";
        //dataSection.innerHTML = 'Can not Find Game';
    }

    dataSection.appendChild(errorMessage);
}

// --------------------------------------------------------------

function populateData(response) {
    console.log("sean is cracked");
    let dataSection = document.getElementById('data');

    // - - - - - - - - - - - - - - - - - - - - - - -

    // BY CATEGORY

    let poo = document.createElement("div");
    poo.setAttribute("class", "wrapper");

    // counter= 0

    response.forEach(element => {

        /*

        query ddatabase of elemnt Id 
            get quantity
            ifwaunti = 0{

            }
            else{

                counter++
            }

        */

        let temp = document.createElement('div');

        temp.style = 'background-color: blue;';

        let temp2 = document.createElement('img');
        temp2.setAttribute("class", "gPic");

        temp2.src = element.thumbnail; 

        temp.appendChild(temp2);

        // - - - - - - - - - - - - - - - 

        let divCeption = document.createElement('div');
        divCeption.setAttribute("class", "newLine");

        divCeption.innerHTML = capitalize(element.title);

        temp.appendChild(divCeption);

        // - - - - - - - - - - - - - - - -

        let gameGenre = document.createElement('div');
        gameGenre.setAttribute("class", "gameInfo");

        gameGenre.innerHTML = "<br>Genre: "+ capitalize(element.genre);
        temp.appendChild(gameGenre);

        // - - - - - - - - - - - - - - - - 

        let gamePublisher = document.createElement('div');
        gamePublisher.setAttribute("class", "gameInfo");

        gamePublisher.innerHTML = "Developer: " + capitalize(element.developer);
        temp.appendChild(gamePublisher);
        
        // - - - - - - - - - - - - - - - -

        let buttonDiv = document.createElement('div');
        buttonDiv.style = "text-align: center;";

        let linkButton = document.createElement('button');
        linkButton.setAttribute("class", "linkButton");
        linkButton.setAttribute("onclick", "location.href='" + element.game_url +"'");  
        linkButton.innerHTML = "Try it Out!";

        buttonDiv.appendChild(linkButton);

        let buttonDiv2 = document.createElement('div');
        buttonDiv2.style = "text-align: center;";
        buttonDiv2.innerHTML = "<br>";

        let rentButton = document.createElement('button');
        rentButton.setAttribute("class", "linkButton");
        rentButton.setAttribute("onclick", "location.href='" + element.game_url +"'");  
        rentButton.innerHTML = "Rent Game! (TBD)";

        buttonDiv2.appendChild(rentButton);

        temp.appendChild(buttonDiv2);
        temp.appendChild(buttonDiv);


        // - - - - - - - - - - - - - - - - 

        poo.appendChild(temp);

    });

    /*

    if counter==0{

        make new div to display
            sorry no games 

    }

    */

    dataSection.appendChild(poo);




    return;

    let gamesListDiv = document.createElement('div');
    gamesListDiv.setAttribute("id", "gamesList");
    gamesListDiv.setAttribute("class", "wrapper");

    let counter = 0;

    response.forEach(element => {
        
        console.log(element.title);

        let temp = document.createElement('div');
    
        temp.style = 'background-color: blue;';
    
        let temp2 = document.createElement('img');

        temp2.setAttribute("class", "gPic");

        temp2.src = element.thumbnail;

        temp.appendChild(temp2);
    
        gamesListDiv.appendChild(temp);

        dataSection.appendChild(gamesListDiv);

        counter++;

        

    });


    

    return;

    // - - - - - - - - NEW SHIT - - - - - - - - - // 

    // BY GAME ID

    /* UNCOMMENT THIS AFTER

    let gamesListDiv = document.getElementById('gamesList');

    */

    gamesListDiv.innerHTML = '';

    for(let index = 0; index < 3; index++){
    
        let temp = document.createElement('div');
    
        temp.style = 'background-color: blue;';
    
        let temp2 = document.createElement('img');

        temp2.setAttribute("class", "gPic");

        temp2.src = response.thumbnail;

        temp.appendChild(temp2);
    
        gamesListDiv.appendChild(temp);
    
    }


    return;





    // - - - - - - - - - - - - - - - - - - - - - - - 
    
    let nameTag = document.createElement('h3');
    nameTag.innerHTML =  capitalize(response.title);

    dataSection.appendChild(nameTag);

    let gamePic = document.createElement('img');
    gamePic.src = response.thumbnail;
    dataSection.appendChild(gamePic);

    return;

    let abilitiesArray = response.abilities;
    let abilities = document.createElement('ul');
    for (const ability of abilitiesArray)
    {
        let abilityLi = document.createElement('li');
        abilityLi.innerHTML = capitalize(ability.ability.name);
        abilities.appendChild(abilityLi);
    }

    dataSection.appendChild(nameTag);
    dataSection.innerHTML += 'Abilities<br>';
    dataSection.appendChild(abilities);

    let spritesObject = response.sprites;
    for (const sprite in spritesObject) {
        if(spritesObject[sprite]) {
            let spriteImg = document.createElement('img');
            spriteImg.src = spritesObject[sprite];
            dataSection.appendChild(spriteImg);
        }
    }
}

/*
    The PokeAPI returns Pokemon's information as all lowercase.
    This function is used to fix this when processing data.
*/
function capitalize(str) {
    if (str)
        return str.charAt(0).toUpperCase() + str.slice(1);
    else
        return '';
}