// let age = 22

// if (age < 21){
//     console.log("You cannot enter the club! ✋")
// } else {
//     console.log("Welcome! 🙌")
// }


// let age = 100
// if (age < 100) {
//     console.log("Not eligible")
// } else if (age === 100) {
//     console.log("Here is your birthday card from the King!")
// } else {
//     console.log("Not elegible, you have gotten one")
// }



// let featuredPosts = ["Check out my Netflix clone", "Here's the code for it",
// "I've just relaunched my portfolio"]

// let myBio = ["I'm Computer System Engineer",
// "I have done BS CSE",
// "I don't have licenses"]

// console.log(myBio[1])
// console.log(myBio[2])
// console.log(myBio[0])
// console.log(myBio.length)



// coposite / duplex data type
// let myArr = ["Abdal", 21, true]


//adding and removing items from arrays
// let cards = [7, 4]
// cards.push(6) //inserting 6
// console.log(cards)

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)
// console.log(messages)
// messages.pop(newMessage) // pull out last element
// console.log(messages)



// FOR LOOPS AND ARRAYS     

// for (let count = 10; count < 101; count += 10){
//     console.log(count)
// }

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!",
//     "Glad to here it from you."
// ]

// for (let i = 0; i < messages.length; i += 1) {
//     console.log(messages[i])
// }


// let cards = [7, 3, 9, 20]
// for (let a = 0; a < cards.length; a++){
//     console.log(cards[a])
// }



// FOR LOOPS, ARRAYS AND DOM

// let sentence = ["Hello!", "My", "name", "is", "Abdal"]
// let greetingEl = document.querySelector("#greeting -el")

// for (let w = 0; w < sentence.length; w++){
//     greetingEl.textContent += sentence[w] + " "
// }



// RETURNING VALUES IN FUNCTIONS

// let playerOne = 145
// let playerTwo = 142

// function getFastestPlayer(){
//     if (playerOne < playerTwo){
//         return playerOne
//     } else if (playerTwo < playerOne){
//         return playerTwo
//     } else {
//         return playerOne
//     } 
// }

// function totalRaceTime() {
//     return playerOne + playerTwo
// }

// let totalTime = totalRaceTime()
// console.log(totalTime)




// GENERATING RANDOM NUMBERS

// let randomNumber = Math.random()
// console.log(randomNumber)

// let floorNumber = Math.floor(3.45632)
// console.log(floorNumber)




// CREATING A DICE

//let randomNumber = Math.floor(Math.random() * 6) + 1 
//console.log(randomNumber)

// function rollDice () {
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//      return randomNumber
// }
// console.log (rollDice())




// LOGICAL AND OPERATOR

// let course = true
// let certificate = true

// if (course === true && certificate === true) {
//     generateCertificate()
// }

// function generateCertificate() {
//     console.log("Generating certificate...")
// }


// AND and OR operator

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }
// function showSolution() {
//     console.log("Showing the solution....")
// }


// let likesDocumentaries = true
// let likesStartups = true
// if (likesDocumentaries === true || likesStartups === true) {
//     recommendMovie()
// } else {
//     console.log("Have a nice day!")
// }

// function recommendMovie(){
//     console.log("Hey, Check out this new film we think you will like it.")
// }



// OBJECTS --> (Store data in-depth)  COMPOSITE/ COMPLEX DATA TYPE

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Abdal Asad",
//     length: 64,
//     level: 2,
//     isFree : true,
//     tags: ["HTML", "CSS"]
// }
// console.log(course.tags)

// let airBnbCastleListing = {
//     night: true,
//     castle: "Live like KING in my castle",
//     price: 173,
//     decoration: ["Dining Room", "Kitchen", "Five rooms", "Three washrooms"],
//     sayHello: function() {
//         console.log("Greetings!")
//     }
// }
// console.log(airBnbCastleListing.night)
// console.log(airBnbCastleListing.decoration)
 
// // METHODS ON OBJECTS
// airBnbCastleListing.sayHello()
// // OBJECT          .  METHOD



// **********************************************
//                  PRACTICE
// **********************************************

// let Person = {
//     name: "Abdal",
//     age: 21,
//     country: "Pakistan"
// }

// function logdata() {
//     console.log(Person.name + " is " + Person.age + " years old and lives in " + Person.country)
// }
//  logdata()



// let age = 66

// if (age < 6){
//     console.log("Free")
// } else if (age <= 17){
//     console.log("Child Discount")
// } else if (age <= 26){
//     console.log("Student Discount")
// } else if (age <= 66){
//     console.log("Full Price")
// } else{
//     console.log("Senior Citizen Discount")
// }



// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

// let addCountry = "Russia"
// largeCountries.push(addCountry)

// for (let n = 0; n < largeCountries.length; n++){
//     console.log(largeCountries[n])
// }



// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// let addCountryOne = "China"
// let addCountryTwo = "Pakistan"

// largeCountries.shift()
// largeCountries.unshift(addCountryOne)

// largeCountries.pop()
// largeCountries.push(addCountryTwo)

// for (let n = 0; n < largeCountries.length; n++){
//     console.log(largeCountries[n])
// }



// let dayOfMonth = 13
// let weekDay = "Friday"

// if (dayOfMonth === 13 && weekDay === "Friday") {
//     console.log("😱")
// }


let hands = ["rock", "paper", "scissor"]
function random() {
    let randomNumbers = Math.floor(Math.random() * 3)
    return hands[randomNumbers]
}

console.log(random())