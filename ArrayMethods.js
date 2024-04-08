var inputArr = [];

//look into why it seems like the variables can't be global
var userInput= document.querySelector(".userInput");
const arrayOut = document.querySelector(".arrayOut");

//Function to update array
function update(){
    let stringUpdater = inputArr.reduce((accumulater,value, index)=>{
return accumulater + (index + 1+ ". ") + value + "<br>";
}, "") //needs quotations here to define initial value and count correctly 
    arrayOut.innerHTML = stringUpdater;
}

//fucntion to clear user input after button click
function clearTextBox(){
    userInput.value="";
    
 }

// Push button
var button = document.getElementById("Push");
button.addEventListener("click",()=> {
    push();
    clearTextBox();
});

function push(){
    var userInput= document.querySelector(".userInput");
    const userInputToArray = userInput.value;
    inputArr.push(userInputToArray);
    update();
}

//Pop Button
var button = document.getElementById("Pop");
button.addEventListener("click",()=> {
    pop();
    clearTextBox();
});

function pop(){
    var userInput= document.querySelector(".userInput");
    const userInputToArray = userInput.value;
    inputArr.pop(userInputToArray);
    update();
    
}

//Shift Button
var button = document.getElementById("shift");
button.addEventListener("click",()=> {
    shift();
    clearTextBox();
});

function shift(){
    var userInput= document.querySelector(".userInput");
    const userInputToArray = userInput.value;

    inputArr.shift(userInputToArray);
    update();
    
}

//Unshift Button
var button = document.getElementById("unshift");
button.addEventListener("click",()=> {
    unshift();
    clearTextBox();
});

function unshift(){
    var userInput= document.querySelector(".userInput");
    const userInputToArray = userInput.value;
    inputArr.unshift(userInputToArray);
    update();
}


//Map Button
var button = document.getElementById("Map");
button.addEventListener("click",()=> {
    arrMap();
    clearTextBox();
});
//look into mapping, I'm not sure this makes sense
function arrMap(){
    var userInput= document.querySelector(".userInput");
    const userInputToArray = userInput.value;

    let arrayMap = inputArr.map((activeElements)=> {
        let newElements = userInputToArray + activeElements;
        return newElements;
    });

    //inputArr(arrayMap);
    inputArr = arrayMap;
    update();
}





