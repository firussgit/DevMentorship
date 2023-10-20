const numRolled = document.querySelector("#numRolled");
const rollBtn = document.querySelector("#rollBtn");

// Selecting the new element
const rolledList = document.querySelector("#rolledList");

function rollDice() {
  numRolled.textContent = "Rolling 🎲..";

  setTimeout(() => {
    const rolled = Math.floor(Math.random() * 6 + 1);
    numRolled.textContent = "You rolled: " + rolled;

    // Calling the function inside the "setTimeout" passing the generated random number as a parameter
    addNumToList(rolled);
  }, 2000);
}

// Initializing an empty list to store the history of rolls
let numList = [];

// Function responsible for adding the number to the list plus rendering the items on the screen
function addNumToList(num) {
  // Append the passed number to the list
  numList.push(num);

  // Render the result of the list on the element
  // We concatenate text with the result and "numList.join(", ")" separates the list elements with a (, )
  rolledList.textContent = "Rolling history: " + numList.join(", ");
}

rollBtn.addEventListener("click", rollDice);
