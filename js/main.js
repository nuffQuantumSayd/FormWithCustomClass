var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
function getElem(id) {
    return document.getElementById(id);
}
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    console.log("addVideoGame was called");
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function getVideoGame() {
    var game = new VideoGame();
    game.title = document.getElementById("title").value;
    game.price = parseFloat(document.getElementById("price").value);
    var ratingInput = document.getElementById("rating");
    game.rating = ratingInput.value;
    var digitalOnly = document.getElementById("online");
    game.isDigitalOnly = digitalOnly.checked;
    console.log(game);
    return game;
}
function displayGame(myGame) {
    var displayDiv = getElem("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerHTML = myGame.title;
    var gameInfo = document.createElement("p");
    var notDigitalDisplay = "";
    if (myGame.isDigitalOnly) {
        notDigitalDisplay = "not";
    }
    gameInfo.innerText = "".concat(myGame.title, " has a rating of ").concat(myGame.rating, ". It costs ").concat(myGame.price, ". It is ").concat(notDigitalDisplay, " digital only.");
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function isAllDataValid() {
    return true;
}
