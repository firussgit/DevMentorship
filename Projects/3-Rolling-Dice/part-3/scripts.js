const numRolled = document.querySelector("#numRolled");
const rollBtn = document.querySelector("#rollBtn");

function rollDice() {
  // Here, we set the textContent here to Rolling.. to show that the dice is rolling
  numRolled.textContent = "Rolling 🎲..";

  // Here, we added a setTimeout function that executes what's inside of it after a set amount of time
  // In this case: 2000 => 2 seconds
  setTimeout(() => {
    // We moved the code here so it is executed after 2 seconds
    const rolled = Math.floor(Math.random() * 6 + 1);

    // Here, we concatenated "You rolled" to the rolled value
    numRolled.textContent = "You rolled: " + rolled;

    // And here's the 2000 I been talking about, it is in ms
  }, 2000);
}

rollBtn.addEventListener("click", rollDice);
