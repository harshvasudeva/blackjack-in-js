let player = {
    name : "Strix",
    chips: 200
}

let cards = []
let sum = 0

let hasBlackjack = false
let isAlive = false
let message =" "

let messageEl=document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// query Selector
//let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips
/* if(sum < 21){
    console.log("Do you want to draw a new card?")
} else if(sum === 21){
    console.log("Blackjack!")
} else {
    console.log("Bust! You're out")
} */
function getRandomCard(){
    //if 1 -> return 11
    //if 11-13 -> return 10
    let randomNumber= Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard


    renderGame()
}

function renderGame(){
    // taking the values of cards from the array
    cardsEl.textContent = "Cards: " 
    
    //loop that renders out all cards 
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    // adding the values of cards
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of luck"
        isAlive = false
    }

    messageEl.textContent = message
}
/* let age = 21
if(age <= 20){
    console.log("You are not old enough")
} else {
    console.log("You can enter")
} */

function newCard(){
        if(isAlive === true && hasBlackjack === false){
        let drawncard = getRandomCard()
        sum += drawncard
        cards.push(drawncard)
        console.log(cards)
        renderGame()
    }
}


/* let featuredPosts = [
    "Check out this cool post",
    "This is another post",
    "This is a third post"
]
console.log(featuredPosts[0])
console.log(featuredPosts.length)

let person = ["Harsh", 24, true]
 */

/* let messages = [
    "hey, how are you?",
    "I'm doing fine",
    "I'm good too"
]
let newMessage = "Same here"
messages.push(newMessage)
console.log(messages)

for ( let i = 0; i < messages.length; i+=1){
    console.log(messages[i])
} */

/* let sentence = ["The", "walrus", "danced"]
let greetingEl = document.getElementById("greeting-el")

for(let i=0; i < sentence.length; i++){
    greetingEl.textContent += sentence[i] + " "
}  */

/* function rollDice(){
    let randomNumber = Math.floor(Math.random() * 6) + 1
    return randomNumber
}
console.log(rollDice()) */

/* let hasCompleted = true
let giveCertificate = true
if ( hasCompleted === true && giveCertificate === true){
    generateCertificate()
}
function generateCertificate(){
    console.log("Generating Certificate")
} */

/* let hasSolved = false
let hasHintsLeft = false
if(hasSolved === false && hasHintsLeft === false){
    showSolution()
}
function showSolution(){
    console.log("Showing solution")
} */

/* let likesDocumentary = false
let likeStartups = true
if(likesDocumentary === true || likeStartups === true){
    console.log("You should watch this")
} */

/* let course = {
    title: "javascript tutorial",
    lessions: 14,
    creator: "John",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["javascript", "web development", "front-end"]

}
console.log(course.length) */

/* let castle = {
    title: "Castle in the Sky",
    price: 190,
    isSuperhost: true,
    images: ["img/castle1.jpg", "img/castle2.jpg", "img/castle3.jpg"]

}
console.log(castle.price)
console.log(castle.isSuperhost) */

//Practice part commented out

