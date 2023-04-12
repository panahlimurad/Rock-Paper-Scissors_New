var startPage = document.querySelector("#startPage");
var inputName = document.querySelector("#inputName");
var plyFirst = document.querySelector("#plyFirst");
var plySecond = document.querySelector("#plySecond");


var startGame = document.querySelector("#startGame");
var gamePage = document.querySelector("#gamePage");

var playerFirst = document.querySelector("#playerFirst");
var playerSecond = document.querySelector("#playerSecond");
// Result
var firstResult = document.querySelector("#firstResult");
var secondResult = document.querySelector("#secondResult");
// Image
var firstImage = document.querySelector("#firstImage");
var secondImage = document.querySelector("#secondImage");
// Image Text
var imageTextFirst = document.querySelector("#imageTextFirst");
var imageTextSecond = document.querySelector("#imageTextSecond");


var yourPoint = 0
var computerPoint = 0



// Add name, click Button and start Game
startGame.addEventListener("click", () => {

    if (!inputName.value.trim()) {
        alert("Please write your name")
        return
    }

    startPage.classList.remove("d-block")
    startPage.classList.add("d-none");
    gamePage.classList.remove("d-none");
    gamePage.classList.add("d-block");
    playerFirst.innerHTML = inputName.value

})
// click ENTER start Game
inputName.addEventListener("keyup", (e) => {
     if (e.keyCode === 13) {
         if (!inputName.value.trim()) {
           alert("Please write your name");
           return;
         }

         startPage.classList.remove("d-block");
         startPage.classList.add("d-none");
         gamePage.classList.remove("d-none");
         gamePage.classList.add("d-block");
         playerFirst.innerHTML = inputName.value;
     }
})


var compAttack = ["r", "s", "p"]

// computer Attack
function computer(arr) {

    var randomAttack = Math.floor(Math.random() * arr.length)
    
    return arr[randomAttack]
}


function game(e) {
    if (startPage.classList.contains("d-block")) {
        return
    }
    var userAttack = e.key;
    var randomCompAttack = computer(compAttack);
    
    if (
      compAttack.indexOf(userAttack) === -1) {
      alert("Please choose correct letter");
      return;
    } 

    console.log(userAttack);
    console.log(randomCompAttack);

    if (userAttack === "r" && randomCompAttack === "s") {
        
        yourPoint++
        firstResult.innerHTML = `Score : ${yourPoint}`
        plyFirst.innerHTML = 'WIN'
        imageTextFirst.innerHTML = "Rock"
        imageTextSecond.innerHTML = "Scissors";

    } else if (userAttack === "s" && randomCompAttack === "p") {
        yourPoint++
        firstResult.innerHTML = `Score : ${yourPoint}`;
        plyFirst.innerHTML = 'WIN';
        imageTextFirst.innerHTML = "Scissors";
        imageTextSecond.innerHTML = "Paper";
        
    } else if (userAttack === "p" && randomCompAttack === "r") {
        yourPoint++
        firstResult.innerHTML = `Score : ${yourPoint}`;
        plyFirst.innerHTML = 'WIN';
        imageTextFirst.innerHTML = "Paper";
        imageTextSecond.innerHTML = "Rock";
        
    } else if (userAttack === randomCompAttack) {
        plyFirst.innerHTML = "DRAW"
        plySecond.innerHTML = "DRAW";
    } 
    
//     if (userAttack === randomCompAttack) {
//       console.log("draw");
//     }
}

window.addEventListener("keyup", game)