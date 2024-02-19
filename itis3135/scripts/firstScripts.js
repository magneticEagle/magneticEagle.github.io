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
    polygon.innerHTML = text;

}