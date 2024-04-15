const result = "";
const plus = document.getElementById("plus").addEventListener("click", function(){
    const arg1 = calculatorScreen.innerHTML.parseInt();
    const arg2 = calculatorScreen.innerHTML.parseInt();
    result = arg1 + arg2;
});
const minus = document.getElementById("minus").addEventListener("click", function(){});
const multiply = document.getElementById("multiply").addEventListener("click", function(){});
const divide = document.getElementById("divide").addEventListener("click", function(){

});
const equals = document.getElementById("equals").addEventListener("click", function(){
    calculatorScreen.innerHTML = result;
});
const dot = document.getElementById("dot").addEventListener("click", function(){
    calculatorScreen.insertAdjacentHTML("beforeend", `.`); 
});
const clear = document.getElementById("clear").addEventListener("click", function(){
    calculatorScreen.innerHTML = ' ';
});
const calculatorScreen = document.getElementById("calculator-screen");
const one = document.getElementById("one").addEventListener("click", function(){
    calculatorScreen.insertAdjacentHTML("beforeend", `1`);
});
const two = document.getElementById("two").addEventListener("click", function(){
    calculatorScreen.insertAdjacentHTML("beforeend", `2`);
});
const three = document.getElementById("three").addEventListener("click", function(){
    calculatorScreen.insertAdjacentHTML("beforeend", `3`);
});
const four = document.getElementById("four").addEventListener("click", function(){
    calculatorScreen.insertAdjacentHTML("beforeend", `4`);
});
const five = document.getElementById("five").addEventListener("click", function(){
    calculatorScreen.insertAdjacentHTML("beforeend", `5`);
});
const six = document.getElementById("six").addEventListener("click", function(){
    calculatorScreen.insertAdjacentHTML("beforeend", `6`);
});
const seven = document.getElementById("seven").addEventListener("click", function(){});
const eight = document.getElementById("eight").addEventListener("click", function(){});
const nine = document.getElementById("nine").addEventListener("click", function(){});
const zero = document.getElementById("zero").addEventListener("click", function(){});

