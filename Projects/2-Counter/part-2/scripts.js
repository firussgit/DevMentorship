// Selecting elements
const number = document.querySelector("#number")
const incrementBtn = document.querySelector("#increment")
const decrementBtn = document.querySelector("#decrement")

// Lets attach some Event Listeners
incrementBtn.addEventListener("click", () => {
    number.textContent += 1
})

decrementBtn.addEventListener("click", () => {
    number.textContent -= 1
})

// We added some Event Listeners to both buttons and told them what to do
// But if you try this you'll see some unexpected behaviors

// If you click the blue button, you'll notice that it adds 1 as a string to the actual number and do no addition
// Example:
// You have 0, you click you get 01, you click again you get 011 and so on

// If you click the red button, you'll notice that it subtracts 1 correctly, but this is not the behavior we are expecting
// What is happening is that JavaScript is appending a 1 to that paragraph while treating the all as strings not numbers
// We'll fix that in the next part