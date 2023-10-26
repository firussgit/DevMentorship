const content = document.querySelector("#content");

const noteModel = document.createElement("ul");
const title = document.createElement("li");

const titleText = document.createElement("b");

const description = document.createElement("li");

content.appendChild(noteModel);

noteModel.appendChild(title);
noteModel.appendChild(description);

title.appendChild(titleText);

// In the last part, the note's title and description were hand coded
// Now we'll use JavaScript objects to display them

// We define an object that contains our note's title and description
note = { title: "Note 1", description: "Description 1" };

titleText.textContent = note.title;
description.textContent = note.description;
