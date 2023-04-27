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

}

//Add validation code****************************
function isAllDataValid():boolean{
    return true;
}

