// Selecting the elements
const numRolled = document.querySelector("#numRolled");
const rollBtn = document.querySelector("#rollBtn");

// Function to roll the dice
function rollDice() {
  // Generating a random number between 6 and 1
  const rolled = Math.floor(Math.random() * 6 + 1);

  //   Rendering the value generated on screen on the "numRolled" field
  numRolled.textContent = rolled;
}

// Attaching Event Listener to the button
rollBtn.addEventListener("click", rollDice);
