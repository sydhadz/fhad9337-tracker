// Setting up variables for our HTML elements using DOM selection
const formPopUp = document.getElementById("formPopUp");
const form = document.getElementById("bookForm");
const tasklist = document.getElementById("tasklist");

function openForm() {
  formPopUp.style.display = "block";
};

function closeForm() {
  formPopUp.style.display = "none";
};

// saving the data in the form when submitting
formPopUp.addEventListener("submit", function(event) {
  event.preventDefault();

  console.log(form.elements.bookTitle.value);

  addTask(
    form.elements.bookTitle.value,
    form.elements.bookAuthor.value, //fix this to be different than a name value so it can show up on list
    form.elements.bookGenre.value,
    form.elements.startDate.value,
    form.elements.endDate.value,
    form.elements.bookRating.value,
    form.elements.bookReview.value,
    form.elements.favourite.value,
  );
  console.log(taskList);
});

//outside of the function and inside, because of an error where it thinks the item isnt defined and then doesn't append
let item = document.createElement("li");

function displayTask(task) {
  let item = document.createElement("li");

  item.setAttribute("data-id", task.id);
  item.innerHTML = `<p><strong>${task.name}</strong><br>${task.type}</p>`;
  tasklist.appendChild(item);
  // Clear the value of the input once the task has been added to the page
  form.reset();

  // Setup delete button DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("🗑️");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton); // Adds a delete button to every task

  // Listen for when the delete button is clicked
  delButton.addEventListener("click", function(event) {

    taskList.forEach(function(taskArrayElement, taskArrayIndex) {
      if (taskArrayElement.id == item.getAttribute('data-id')) {
        taskList.splice(taskArrayIndex, 1)
      }
    })

    // Make sure the deletion worked by logging out the whole array
    console.log(taskList)

    item.remove(); // Remove the task item from the page when button clicked
    // Because we used 'let' to define the item, this will always delete the right element
  })  
};

// SECTION 1 CODING CHALLENGE SCRIMBA CODE BELOW
let checkboxElem = document.createElement("input");
checkboxElem.setAttribute("type", "checkbox");

item.insertBefore(checkboxElem, item.firstChild)

checkboxElem.addEventListener("change", (event) => {
  // Event listener callback function
  let isChecked = event.target.checked;
  
  // change this for the favourite false/true 
  taskList.forEach(function(taskArrayElement, taskArrayIndex){
    if (taskArrayElement.id == item.getAttribute("data-id")){
      if (isChecked) {
        item.style.backgroundColor = 'rgb(220, 255, 220)';
        taskArrayElement.billable = true;
      } else {
        item.style.backgroundColor = '#ffffff';
        taskArrayElement.billable = false;
      }
    }
  })
  
});


// Create an array called 'taskList' - week 3 tutorial code
var taskList = [];

// Create a function called 'addTask'
// Give the function input parameters for: name, type, rate, time, client
// Paste your object definition from above in the function
// Replace the property values with the input paramaters
// Add the object to the taskList array

function addTask(name, name, type, rate, time, client) {

  // Creating the object, directly passing in the input parameters
  let task = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    startDate: "2018-07-21",
    endDate: "2018-07-22",
    rating: "1",
    review: "Love this book",
    favourite: true,
    id: Date.now(),
    date: new Date().toISOString()
  }

  taskList.push(task);
  displayTask(task);

}

// Log the array to the console.
console.log(taskList);