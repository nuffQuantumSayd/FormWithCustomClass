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
function clearAllErrors() {
    var errorSummary = getElem("validation-summary");
    errorSummary.innerText = "";
}
function addVideoGame() {
    console.log("addVideoGame was called");
    clearAllErrors();
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
function getInputById(id) {
    return document.getElementById(id);
}
function isAllDataValid() {
    var isValid = true;
    var title = getInputById("title").value;
    if (title == "") {
        isValid = false;
        addErrorMessage("Title is required");
    }
    var price = getInputById("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue)) {
        isValid = false;
        addErrorMessage("Price is required and must be a number");
    }
    var rating = getElem("rating").value;
    if (rating == "") {
        isValid = false;
        addErrorMessage("You must choose a rating");
    }
    return isValid;
}
function addErrorMessage(errorMessage) {
    var errorSummary = getElem("validation-summary");
    var errorItem = document.createElement("li");
    errorItem.innerText = errorMessage;
    errorSummary.appendChild(errorItem);
}
