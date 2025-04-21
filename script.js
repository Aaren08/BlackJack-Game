
//let firstCard = getRandomCard() //(1) avoiding hard-code values 
//let secondCard = getRandomCard()
let cardsArr = [] //array

let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""

// CREATING AN OBJECT 
let player = {
    name: "Abdal",
    chips: 145
}

// let playerName = "Abdal"
// let playerChips = 145

let playerEB = document.querySelector("#player-eb")
playerEB.textContent = player.name + ": $" + player.chips

let messageEb = document.getElementById("message-eb")
//let sumEb = document.getElementById("sum-eb")
let sumEb = document.querySelector("#sum-eb")
let cardsEb = document.querySelector("#cards-eb")

// Generating random values
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cardsArr = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card?"    
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEb.textContent = message
    sumEb.textContent = "Sum: " + sum
    cardsEb.textContent = "Cards: " 
    //+ cardsArr[0] + " " + cardsArr[1]

    for (let i = 0; i < cardsArr.length; i++){
        cardsEb.textContent += cardsArr[i] + " "
    }
}

function newCard(){
    if (isAlive === true && hasBlackjack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cardsArr.push(newCard)
        renderGame()
    }
    
}




