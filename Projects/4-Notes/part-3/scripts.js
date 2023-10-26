const content = document.querySelector("#content");

// The Note model will be an unorganized list
// The list contains 2 list items, one for the title and one for the description

// We start by creating them in order as we did in the previous part
const noteModel = document.createElement("ul");
const title = document.createElement("li");

// We want the title to be a little bolder so we add a "b" tag to it
const titleText = document.createElement("b");

const description = document.createElement("li");

// Now, we attach them

// Attaching the list to the container
content.appendChild(noteModel);

// Attaching list items to the list
noteModel.appendChild(title);
noteModel.appendChild(description);

// Attaching the bold text element to the title element
title.appendChild(titleText);

// Defining text content for the elements
titleText.textContent = "Note 1";
description.textContent = "Description 1";
