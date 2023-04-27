class VideoGame{
    title:String;
    price:number;
    rating:String;
    isDigitalOnly:boolean;
}

//test code
// let myGame = new VideoGame();
// myGame.title = "Mario";
// myGame.isDigitalOnly = true;
// myGame.rating = "E";

/**
 * a shortcut for document.getElementById()
 * @param id target html id
 * @returns html element
 */
function getElem(id:string){
    return document.getElementById(id);
}

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame(){
    console.log("addVideoGame was called");

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

/**
 * Gets all game data from the form
 * and returns it in a VideoGame object
 */
function getVideoGame():VideoGame{
    //create game
    let game = new VideoGame();
    //populate with data from the form
    game.title = (<HTMLInputElement>document.getElementById("title")).value;
    game.price = parseFloat((<HTMLInputElement>document.getElementById("price")).value);
    
    let ratingInput = <HTMLSelectElement>document.getElementById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>document.getElementById("online");
        // if(digitalOnly.checked){
        //     game.isDigitalOnly = true;
        // }
        // else{
        //     game.isDigitalOnly = false;
        // }
    game.isDigitalOnly = digitalOnly.checked;
    //return game
    console.log(game);
    return game;
}

function displayGame(myGame:VideoGame):void{
    //display video game below the form
    let displayDiv = getElem("display");

    //create h2 element with object name
    let gameHeading = document.createElement("h2");
    gameHeading.innerHTML = <string>myGame.title;

    //create paragraph with game details
    let gameInfo = document.createElement("p");
    let notDigitalDisplay = "";
    if(myGame.isDigitalOnly){
        notDigitalDisplay = "not"
    }
    // gameInfo.innerText = myGame.title + " has a rating of " +
    //                     myGame.rating + ". It costs " + myGame.price +
    //                     ". It is " + notDigitalDisplay + " digital only";
    
    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. It costs ${myGame.price}. It is ${notDigitalDisplay} digital only.`

    //add h2 in the div display
    displayDiv.appendChild(gameHeading);
    //add p game info
    displayDiv.appendChild(gameInfo);
}

//Add validation code****************************
function isAllDataValid():boolean{
    return true;
}

