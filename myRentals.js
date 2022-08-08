/*
    FILLED IN FOR USE WITH POKEAPI
*/
// Endpoint you are sending a GET request to
//let apiURL = 'https://pokeapi.co/api/v2/pokemon/';

let apiURL = 'https://www.freetogame.com/api/game?id='; 

document.getElementById('myAllButton').onclick = getAllData;

//document.getElementById('getData').onclick = getData;

let errorMessage = document.createElement('p');

console.log(apiURL);

//createGameDiv();

// GET USER INPUT 

// let userInput = document.getElementById('dataInput').value;

// --------------------------------------------------------------

let poo = document.createElement("div");
poo.setAttribute("class", "wrapper");

async function getAllData() {

    console.log("GOT HERE");

    let dataSection = document.getElementById('data');

    dataSection.innerHTML = '';

    // THIS IS GET REQUEST

    for(let bread = 5; bread < 20 ; bread++){
        let response = await fetch("http://13.57.234.28:9090/history/" + bread);

        if (response.status === 200) {
            let data = await response.json(); //same as JSON.parse(response);
    
            populateData(data);
        } else {
    
            errorMessage.innerHTML = "Can't find game";
    
        }

    }

    return;

    let response = await fetch("http://3.82.175.143:8080/history/9");

    //errorMessage.innerHTML = "";

    if (response.status === 200) {
        let data = await response.json(); //same as JSON.parse(response);

        populateData(data);
    } else {

        errorMessage.innerHTML = "Can't find game";

    }

}

// --------------------------------------------------------------

function printGameInfo(theData, rentalInfo){

    let dataSection = document.getElementById('data');

    let temp = document.createElement('div');
    temp.setAttribute("id", "theBigGreen");

    temp.style = 'background-color: rgba(47, 187, 13, 0.85)';

    let gaYmeTitle = document.createElement('div');
    gaYmeTitle.innerHTML = theData.title;
    gaYmeTitle.setAttribute("class", "gameInfo");
    gaYmeTitle.style = "text-align: center; font-size: 25; font-weight: 900;";

    temp.appendChild(gaYmeTitle);

    let gaYmePic = document.createElement('img');
    gaYmePic.setAttribute("class", "gPic");
    gaYmePic.src = theData.thumbnail;

    temp.appendChild(gaYmePic);

    let thisThat = document.createElement('div');
    thisThat.innerHTML = "User ID = " + rentalInfo.user_id.user_id + "<br>UserName = " + rentalInfo.user_id.username;
    thisThat.style = "font-size: 20; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;";

    temp.appendChild(thisThat);

    let ThatThis = document.createElement('div');
    ThatThis.innerHTML = "<br>Rental ID = " + rentalInfo.rental_id + "<br>Rental Status = " + rentalInfo.rentalStatus;
    ThatThis.style = "font-size: 20; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;";

    temp.appendChild(ThatThis);

    let returnRental = document.createElement('button');
    returnRental.innerHTML = "RETURN RENTAL HERE";

    let ponies = rentalInfo;

    console.log(ponies.rentalStatus);

    let theBetterPony = [ponies.rental_id, ponies.user_id, ponies.game_id,ponies.rentalStatus];

    returnRental.setAttribute("onclick", "updateTheFuckingIdontCareIts4am(" +  "'" + theBetterPony + "'" + ")");
    //returnRental.setAttribute("onclick", "updateTheFuckingIdontCareIts4am()");

    //temp.appendChild(returnRental);

    

    poo.appendChild(temp);

    dataSection.appendChild(poo);

}

async function updateTheFuckingIdontCareIts4am(bigInfo){

    let Array = bigInfo;

    console.log(Array[1]);

    console.log("YES: " + bigInfo);
    console.log(bigInfo[0]);
    console.log(bigInfo[1]);
    console.log(bigInfo[2]);
    console.log(bigInfo[3]);

    let newPikachu = {"rental_id": bigInfo[0], "user_id": bigInfo[1], "game_id": bigInfo[2], "rentalStatus": bigInfo[3]};

    console.log(newPikachu);

    return;

    let tokp = bigInfo;
    console.log("Tokp PLESASE? " + tokp);
    console.log("HOT DOG " + bigInfo.user_id);

    let earl = "http://3.82.175.143:8080/history/" + bigInfo.rental_id;

    return;

    let rentalObject = {"rental_id": permRentID, "user_id": seanIsCool, "game_id": andyIsMEGACool, "rentalStatus": permRentStatus};

    console.log(JSON.stringify(rentalObject));

    let earlResponse = await fetch(earl,{
        method: 'POST',
        body:JSON.stringify(rentalObject),
        headers:new Headers({'Content-Type': 'application/json',})
    });
    
    if(earlResponse.status === 200){
        console.log("HOORARY WE ADDED TO THE TABLE!! FUCK!")
    }
    else{
        console.log("shut up sean you are WICKED CRACKED");
    }




    console.log("PENIS");

}






async function populateData(response) {
    console.log("sean is cracked");

    let theRentalInfo = response;

    // - - - - - - - - - - - - - - - - - - - - - - -

    response = await fetch("https://www.freetogame.com/api/game?id=" + response.game_id.game_id);

    if (response.status === 200) {
        let data = await response.json(); 
        console.log(data);
        printGameInfo(data, theRentalInfo);
    } else {
        console.log("error... :(");
    }





    // - - - - - - - - - - - - - - - 

        /*

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

        */



        




    /*

    if counter==0{

        make new div to display
            sorry no games 

    }

    */

    




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