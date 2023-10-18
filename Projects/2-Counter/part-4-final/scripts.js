const number = document.querySelector("#number")
const incrementBtn = document.querySelector("#increment")
const decrementBtn = document.querySelector("#decrement")

// Targeting the Reset button
const resetBtn = document.querySelector("#reset")

let count = 0

number.textContent = count

incrementBtn.addEventListener("click", () => {
    count++
    number.textContent = count
    // Call the function
    addClass()
})

decrementBtn.addEventListener("click", () => {
    count--
    number.textContent = count
    // Call the function
    addClass()
})

// Event Listener for the Reset button
resetBtn.addEventListener("click", () => {
    // Reset the count to 0
    count = 0
    // Show the new value to user
    number.textContent = count
    // Call the function
    addClass()
})

// Let's create a function that will be responsible for adding the classes to our elements
function addClass() {
    if (count == 0) {
        // If the count is 0, we delete all the classes if there's any
        number.className = ""
    } else if (count > 0) {
        // If the count is greater than 0, we delete all the classes if there's any then we add "positive" class
        number.className = ""
        number.classList.add("positive")
    } else {
        // If the count is lower than 0, we delete all the classes if there's any then we add "negative" class
        number.className = ""
        number.classList.add("negative")
    }
}

// Now we need to call this function each time we click a button