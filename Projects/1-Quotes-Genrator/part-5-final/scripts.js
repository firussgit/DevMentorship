// A list of quotes
const quotes = [
    // A list of some meaningful quotes!
    '"The only way to do great work is to love what you do." - Steve Jobs', // Notice that we wrapped the string in a single quotes '' that's because it already has double quotes "". We can do this '""' or the other way around "''".
    '"In three words I can sum up everything I\'ve learned about life: it goes on." - Robert Frost', // Notice that we used "\" before the ' to escape that character, because we have both "" and ''.
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
    '"The only thing necessary for the triumph of evil is for good men to do nothing." - Edmund Burke',
    '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt'
]

// Targeting elements
const target = document.querySelector("#target")
const button = document.querySelector("button")

// Attaching EventListener
button.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * (quotes.length - 0) + 0)
    target.textContent = quotes[randomNumber]
})