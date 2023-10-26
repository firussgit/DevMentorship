const content = document.querySelector("#content");

// We should change the note object to an array of objects
notes = [
  // We can add as any notes as we want, we just define them as an object inside this array

  // Try adding more Notes here as objects
  { title: "Note 1", description: "Description 1" },
  { title: "Note 2", description: "Description 2" },
  { title: "Note 3", description: "Description 3" },
];

// Now, we want to use a foreach loop to loop over the array and generate a list for each object inside
notes.forEach((note) => {
  // Here, we are saying for each object on the array (in this case 3) create a note model
  const noteModel = document.createElement("ul");
  const title = document.createElement("li");
  const titleText = document.createElement("b");
  const description = document.createElement("li");

  // Then we attach each element created
  content.appendChild(noteModel);
  noteModel.appendChild(title);
  noteModel.appendChild(description);
  title.appendChild(titleText);

  // Then we define the text content of each note model depending on the object's parameters
  titleText.textContent = note.title;
  description.textContent = note.description;
});
