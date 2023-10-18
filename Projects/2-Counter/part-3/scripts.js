// Selecting elements
const number = document.querySelector("#number")
const incrementBtn = document.querySelector("#increment")
const decrementBtn = document.querySelector("#decrement")

// First, lets create a variable that hosts our count number
let count = 0

// Then, let's show this count value in that paragraph instead of that hand coded 0, we can get rid of that 0 in the HTML
number.textContent = count

// Now, let's edit this Event Listeners function and tell them to use the count variable instead of that 0 from the HTML
incrementBtn.addEventListener("click", () => {
    // We want each time we click to add 1 to the count variable
    count++ // (count++) or (count += 1) or (count = count + 1) are all the same

    // After adding 1 to the count variable, we want to update the value on the HTML so the user can see the new value
    number.textContent = count
})

// The same goes here except instead of +1 we do -1
decrementBtn.addEventListener("click", () => {
    count-- // (count--) or (count -= 1) or (count = count - 1) are all the same

    number.textContent = count
})

// That's it, click the buttons and you'll see that it works as expected