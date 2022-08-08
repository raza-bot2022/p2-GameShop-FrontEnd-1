// Endpoint you are sending a GET request to
//let apiURL = 'https://pokeapi.co/api/v2/pokemon/';

let apiURL = 'https://www.freetogame.com/api/game?id='; 

//document.getElementById('getData').onclick = getData;

let seshUID = sessionStorage.getItem("user-id");

console.log("I LOVE HONEY: " + seshUID);


let errorMessage = document.createElement('p');
//errorMessage.style = "text-align:center; font-size:100; color:black; font-weight: 900";

console.log(apiURL);

let clickedGameID = 0;

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
}


// --------------------------------------------------------------

async function getData(type) {

    // - - - - - - - - - - - -

    let userInput = document.getElementById('dataInput').value;

    console.log(userInput);

    // - - - - - - - - - - - - 

    let dataSection = document.getElementById('data');

    dataSection.innerHTML = "";

    errorMessage.innerHTML = "";

    let errorDiv = document.createElement('div');
    errorDiv.setAttribute("id", "errDiv");

    errorDiv.innerHTML = "";


    console.log(type);

    let response = "";

    if(type == 'id'){

        response = await fetch("https://www.freetogame.com/api/game?id=" + userInput);

        if (response.status === 200) {
            let data = await response.json(); //same as JSON.parse(response);
            console.log("YESYESYES");
            populateIdData(data);
        } else {
            errorMessage.innerHTML = "Can't Find Game";
            errorMessage.style = "font-size: 100; font-family: 'Courier New', Courier, monospace; font-weight:900";

            errorDiv.appendChild(errorMessage);


            let poo2 = document.createElement("div");
            poo2.setAttribute("class", "wrapper2");

            poo2.appendChild(errorDiv);

            dataSection.appendChild(poo2);
        }

        

        return;
    }

    if(type == 'category'){
        response = await fetch("https://www.freetogame.com/api/games?category=" + userInput);
    }
    if(type == 'plat'){
        response = await fetch("https://www.freetogame.com/api/games?platform=" + userInput);
    }
    if(type == 'all'){
        response = await fetch("https://www.freetogame.com/api/games");
    }

    // If using input for identifiers, etc.
    // For example, if using PokeAPI, this may be the Pokemon's ID.

    //let userInput = document.getElementById('dataInput').value; 
    // let userInput = 5;

    // Emptying out the div before inserting new data.
    //document.getElementById('data').innerHTML = '';

    // THIS IS GET REQUEST

    //let response = await fetch("https://www.freetogame.com/api/games?category=card");

    //let response = await fetch(apiURL + userInput); 
    
    console.log(apiURL + userInput);

    // OR let response = await fetch({method: 'POST', body:JSON.stringify(myObj), headers: {}});
    // ^ THIS IS POST REQUEST WITH FETCH

    if (response.status === 200) {
        let data = await response.json(); //same as JSON.parse(response);
        console.log("YESYESYES");
        populateData(data);
    } else {
        errorMessage.innerHTML = "Can't Find Game";
        errorMessage.style = "font-size: 100; font-family: 'Courier New', Courier, monospace; font-weight:900";

        errorDiv.appendChild(errorMessage);

        let poo2 = document.createElement("div");
        poo2.setAttribute("class", "wrapper2");

        poo2.appendChild(errorDiv);

        dataSection.appendChild(poo2);

    }

}

function stupid(userID, gameID){

    console.log(userID + "   " + gameID);

    //----- GETTING INFO FOR INSERT------------ //


    async function getUserInfo(){
        
        let earl = "http://3.82.175.143:8080/users/" + userID;

        let earlResponse = await fetch(earl);
    
        if(earlResponse.status === 200){
            console.log("HOORARY WE ADDED TO THE TABLE!! FUCK!")

            let userOBJ = await earlResponse.json();

            //console.log(userOBJ);

            return userOBJ;

         }
        else{
            console.log("shut up sean you are WICKED CRACKED");
        }

    }

    async function getGameInfo(){
        
        let earl = "http://3.82.175.143:8080/games/" + gameID;

        let earlResponse = await fetch(earl);
    
        if(earlResponse.status === 200){
            console.log("HOORARY WE ADDED TO THE GAMEEESESE TABLE!! FUCK!")

            let gameOBJ = await earlResponse.json();

            //console.log(userOBJ);

            return gameOBJ;

         }
        else{
            console.log("shut up sean you are WICKED CRACKED");
        }

    }

    // ----------------------------------------//

    let permRentID = 1;

    let permRentStatus = "current";

    console.log("THIS SHOULD BE YES: " + permRentID + " " + userID + " " + gameID +  " " + permRentStatus);

    let numUID = Number(userID);
    let numGID = Number(gameID);

    async function insertRentalHistory(){

        // -------------------------------------

        let seanIsCool = await getUserInfo();
        let andyIsMEGACool = await getGameInfo();

        // -------------------------------------

        let earl = "http://3.82.175.143:8080/history";

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
    }

    // ------------------------------------------------------------------

    insertRentalHistory();

}


function rentGameFunction(){

    console.log("In Rent Game Function");

    console.log(this.id);
    console.log(this.title);
    console.log(this.name);
    console.log(this.description);

    let clickedID = this.id;
    let clickedTitle = this.title;
    let clickedName = this.name;
    let clickedDescription = this.description;

    let clickedImage = document.createElement('img');
    clickedImage.src = clickedName;

    let dataSection = document.getElementById('data');
    dataSection.innerHTML = "";

    let newBox = document.createElement('div');
    newBox.setAttribute("class", "clickedRentGame")

    // - - - - - - - - - - - - - - - - - - 

    newBox.innerHTML += "Game ID: " + clickedID;
    newBox.innerHTML += "<br>";

    // - - - - - - - - - - - - - - 

    async function blah(){

        let tempID = clickedID;
        let earl = "http://3.82.175.143:8080/games/" + tempID;
    
        let earlResponse = await fetch(earl);
    
        if(earlResponse.status === 200){
            let theQ = await earlResponse.json();

            newBox.innerHTML += "<br>Quantity: " + theQ.quantity;
            newBox.innerHTML += "<br>";

         }
        else{
            console.log("shut up sean you are CRACKED");
        }

    }

    blah();

    // - - - - - - - - - - - - - - 

    newBox.innerHTML += "Game Name: " + clickedTitle;
    newBox.innerHTML += "<br>";

    newBox.appendChild(clickedImage);
    newBox.innerHTML += "<br><br>";

    newBox.innerHTML += "Description: " + clickedDescription;
    newBox.innerHTML += "<br><br>";


    console.log("before create button");

    let confirmDiv = document.createElement('div');

    let confirmButton1 = document.createElement('button');
    confirmButton1.setAttribute("class", "confirmButton");

    confirmButton1.innerHTML = "Confirm Rental";

    let tornado = sessionStorage.getItem('user-id');

    confirmButton1.setAttribute("onclick", "stupid(" + tornado + ", " + clickedID + ")");

    confirmDiv.appendChild(confirmButton1);

    console.log("after created button");
    console.log(confirmButton1.innerHTML);


    // ----------------------

    newBox.appendChild(confirmDiv);

    newBox.innerHTML += "<br><small>...getting quantity</small>";
    
    dataSection.appendChild(newBox);


}



// --------------------------------------------------------------

function populateIdData(response){
    console.log("sean is cracked");
    let dataSection = document.getElementById('data');

    dataSection.innerHTML = "";

    // - - - - - - - - - - - - - - - - - - - - - - -

    // BY CATEGORY

    let poo = document.createElement("div");
    poo.setAttribute("class", "wrapper");

    // ----------------------------------

    let temp = document.createElement('div');

    temp.style = 'background-color: blue;';

    let temp2 = document.createElement('img');
    temp2.setAttribute("class", "gPic");
    temp2.src = response.thumbnail; 

    temp.appendChild(temp2);

    // - - - - - - - - - - - - - - - 

    let divCeption = document.createElement('div');
    divCeption.setAttribute("class", "newLine");

    divCeption.innerHTML = capitalize(response.title);

    temp.appendChild(divCeption);

    // - - - - - - - - - - - - - - - -

    let gameGenre = document.createElement('div');
    gameGenre.setAttribute("class", "gameInfo");

    gameGenre.innerHTML = "<br><b>Genre:</b> "+ capitalize(response.genre);
    temp.appendChild(gameGenre);

    // - - - - - - - - - - - - - - - - 

    let gamePublisher = document.createElement('div');
    gamePublisher.setAttribute("class", "gameInfo");

    gamePublisher.innerHTML = "<b>Developer:</b> " + capitalize(response.developer);
    temp.appendChild(gamePublisher);
        
    // - - - - - - - - - - - - - - - -

    let gamePlatform = document.createElement('div');
    gamePlatform.setAttribute("class", "gameInfo");

    gamePlatform.innerHTML = "<b>Platform:</b> " + capitalize(response.platform);
    temp.appendChild(gamePlatform);

    // - - - - - - - - - - - - - - - - 

    // FUCKCKCKCKKCKCKCKCKCKCKKCKCKCKCK


    let buttonDiv2 = document.createElement('div');
    buttonDiv2.style = "text-align: center; position:absolute; left:40px; top:74%;";
    buttonDiv2.innerHTML = "<br>";

    console.log("Creating Rent Button");

    let rentButton = document.createElement('button');
    rentButton.setAttribute("class", "linkButton");

    rentButton.setAttribute("id", response.id);
    rentButton.title = response.title;
    rentButton.name = response.thumbnail;
    rentButton.description = response.short_description;

    rentButton.onclick = rentGameFunction;  

    rentButton.innerHTML = "Rent Game!";

    buttonDiv2.appendChild(rentButton);


    //   -    -     -      -      -     -      -     //


    console.log("Line 327");

    let buttonDiv = document.createElement('div');
    buttonDiv.style = "text-align: center; position:absolute; left:40px; top:88%;";

    let linkButton = document.createElement('button');
    linkButton.setAttribute("class", "linkButton");
    linkButton.setAttribute("onclick", "location.href='" + response.game_url +"'");  
    linkButton.innerHTML = "Try it Out!";

    buttonDiv.appendChild(linkButton);


    temp.appendChild(buttonDiv2);

    temp.appendChild(buttonDiv);

    console.log("Line 345");

    // - - - GOOD COPY -------///

    /*

    let buttonDiv = document.createElement('div');
    buttonDiv.style = "text-align: center;";

    let linkButton = document.createElement('button');
    linkButton.setAttribute("class", "linkButton");
    linkButton.setAttribute("onclick", "location.href='" + response.game_url +"'");  
    linkButton.innerHTML = "Try it Out!";

    buttonDiv.appendChild(linkButton);

    let buttonDiv2 = document.createElement('div');
    buttonDiv2.style = "text-align: center;";
    buttonDiv2.innerHTML = "<br>";

    let rentButton = document.createElement('button');
    rentButton.setAttribute("class", "linkButton");
    rentButton.setAttribute("onclick", "location.href='" + response.game_url +"'");  
    rentButton.innerHTML = "Rent Game! (TBD)";

    buttonDiv2.appendChild(rentButton);

    temp.appendChild(buttonDiv2);
    temp.appendChild(buttonDiv);

    */

    // - - - - - - - - - - - - - - - - 

    poo.appendChild(temp);

    dataSection.appendChild(poo);

    return;

}

// ---------------------------------------------------------------

function populateData(response) {
    console.log("sean is cracked");
    let dataSection = document.getElementById('data');

    dataSection.innerHTML = "";

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

        gameGenre.innerHTML = "<br><b>Genre:</b> "+ capitalize(element.genre);
        temp.appendChild(gameGenre);

        // - - - - - - - - - - - - - - - - 

        let gamePublisher = document.createElement('div');
        gamePublisher.setAttribute("class", "gameInfo");

        gamePublisher.innerHTML = "<b>Developer:</b> " + capitalize(element.developer);
        temp.appendChild(gamePublisher);
        
        // - - - - - - - - - - - - - - - -

        let gamePlatform = document.createElement('div');
        gamePlatform.setAttribute("class", "gameInfo");

        gamePlatform.innerHTML = "<b>Platform:</b> " + capitalize(element.platform);
        temp.appendChild(gamePlatform);

        // - - - - - - - - - - - - - - - - -

        // - - - - - - - - - - - - - - - - - 

        let buttonDiv = document.createElement('div');
        buttonDiv.style = "text-align: center; position:absolute; left:40px; top:88%;";

        let linkButton = document.createElement('button');
        linkButton.setAttribute("class", "linkButton");
        linkButton.setAttribute("onclick", "location.href='" + element.game_url +"'");  
        linkButton.innerHTML = "Try it Out!";

        buttonDiv.appendChild(linkButton);

        let buttonDiv2 = document.createElement('div');
        buttonDiv2.style = "text-align: center; position:absolute; left:40px; top:74%;";
        buttonDiv2.innerHTML = "<br>";

        let rentButton = document.createElement('button');
        rentButton.setAttribute("class", "linkButton");


        rentButton.setAttribute("id", element.id); 
        rentButton.title = element.title;
        rentButton.name = element.thumbnail;
        rentButton.description = element.short_description;
        rentButton.onclick = rentGameFunction;  
        rentButton.innerHTML = "Rent Game!";

        buttonDiv2.appendChild(rentButton);

        temp.appendChild(buttonDiv2);
        temp.appendChild(buttonDiv);


        // - - - - - - - - - - - - - - - - 

        poo.appendChild(temp);

    });

    dataSection.appendChild(poo);

    return;
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
