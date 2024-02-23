//TIME
const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const day = date.getDate();
const month = allMonths[date.getMonth()];
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const dayOfWeek = daysOfWeek[date.getDay()];

const formattedDate = `Today is ${hours}:${minutes} on ${dayOfWeek}, ${day} ${month}, ${year}`;
currentDateHeading.textContent = formattedDate;

//GREETING
function userGreeting(){
    let name = document.getElementById("user-name").value;
    let feeling = document.getElementById("feeling").value;
    let greeting = document.getElementById("greeting");

    let text = `The Magnetic Eagle welcomes you, ${name}!
    We respectfully acknowledge your current state of ${feeling}ness.`

    greeting.innerHTML = text;
}

//FAVORITE NUMBER
function favoriteNumber(){
    let polygons = ["theoretical mathematical concept","henagon", "digon", "trigon", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "enneagon", "decagon"]
    let favNumber = document.getElementById("fav-number").value;
    let polygon = document.getElementById("polygon");

    favNumber = Math.abs(favNumber);
    favNumber = Math.round(favNumber);

    let text = `Your favorite number is ${favNumber}! Did you know that a polygon with ${favNumber} sides is called a ${polygons[favNumber]}?`
    
    alert(text);
}

//BRAND FUNCTIONS
let randomNumber = null;
let diceResult = document.getElementById("dice-result");
let priceResult = document.getElementById("magnets-price-result");
let taxResult = document.getElementById("magnets-tax-result");
let lastMessage = document.getElementById("last-message");


function dice(){
    const result = Math.floor(Math.random(1) * 7);
    
    if(result == 1){diceResult.innerHTML = `You get ${result} magnet!`;}
    else{diceResult.innerHTML = `You get ${result} magnets!`;}
    randomNumber = result;
}

function magnetsPrice(){
    if(randomNumber == null){priceResult.innerHTML = "You have not rolled the dice yet :)"}
    else{priceResult.innerHTML = `The price of ${randomNumber} $3 magnets will be $${randomNumber * 3}`}     
}

function magnetsTaxPrice(){
    if(randomNumber == null){taxResult.innerHTML = "You have not rolled the dice yet :)"}
    else{taxResult.innerHTML = `The total price with tax of ${randomNumber} $3 magnets will be $${randomNumber * 3 * 1.0475}`}  
}

function purchaseYes(){
    if(randomNumber == null){lastMessage.innerHTML = "You have not rolled the dice yet :)"}
    else{lastMessage.innerHTML = `Thank you for your purchase! Your magenets will be delivered to your address within 5-7 business days. (Don't ask us how we know where you live)`}  
}

function purchaseNo(){
    if(randomNumber == null){lastMessage.innerHTML = "You have not rolled the dice yet :)"}
    else{lastMessage.innerHTML = `Understandable, have a good day!`}
}

//DYNAMIC LOADING
document.getElementById("dice").addEventListener("click", function(){
    document.getElementById("section-one").classList.remove("first-scripts-content");
});
document.getElementById("magnets-price").addEventListener("click", function(){
    document.getElementById("section-two").classList.remove("first-scripts-content");
});
document.getElementById("tax-price").addEventListener("click", function(){
    document.getElementById("section-three").classList.remove("first-scripts-content");
});