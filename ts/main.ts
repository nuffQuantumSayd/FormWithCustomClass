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

/**
 * Clears all errors in the validation summary
 */
function clearAllErrors(){
    let errorSummary = getElem("validation-summary");
    errorSummary.innerText = "";
}

function addVideoGame(){
    console.log("addVideoGame was called");
    clearAllErrors();

    if(isAllDataValid()){
        let game:VideoGame = getVideoGame();
        displayGame(game);
    }
    else{
        displayRatingsLink();
    }
}

function displayRatingsLink(){
    let ratingsElements = document.querySelectorAll(".rating-error");
    for(let i = 0; i < ratingsElements.length; i++){
        let currElem = <HTMLElement>ratingsElements[i];
        currElem.onclick = goToRatingsPage;
        // currElem.innerHTML += "<a target='_blank' href='http://www.esrb.org/'>Click here for info</a>";
    }
}

function goToRatingsPage(){
    window.open("https://www.esrb.org/", "_blank");
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

function getInputById(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

//Add validation code****************************
function isAllDataValid():boolean{
    let isValid = true;
    let title = getInputById("title").value;
    if(title == ""){
        isValid = false;
        addErrorMessage("Title is required");
    }

    let price = getInputById("price").value;
    let priceValue = parseFloat(price);
    if(price == "" || isNaN(priceValue)){
        isValid = false
        addErrorMessage("Price is required and must be a number");
    }
    let rating = (<HTMLOptionElement>getElem("rating")).value;
    if(rating == ""){
        isValid = false;
        addErrorMsgWithCustomClass("You must choose a rating!", "rating-error");
    }
    return isValid;
}

function addErrorMessage(errorMessage:string) {
    let errorSummary = getElem("validation-summary");
    let errorItem = document.createElement("li");
    errorItem.innerText = errorMessage;
    errorSummary.appendChild(errorItem);
}

function addErrorMsgWithCustomClass(errorMessage:string, cssClass:string){
    let errorSummary = getElem("validation-summary");
    let errorItem = document.createElement("li");
    errorItem.classList.add(cssClass);
    errorItem.innerText = errorMessage;
    errorSummary.appendChild(errorItem);
}
