// Setting up variables for our HTML elements using DOM selection
const formPopUp = document.getElementById("formPopUp");
const form = document.getElementById("bookForm");
const booklist = document.getElementById("bookList"); //taskList
const bookPopUp = document.getElementById("bookPopUp");

function openForm() {
  formPopUp.style.display = "block";
};

function closeForm() {
  formPopUp.style.display = "none";
};

function closePopUp() {
  bookPopUp.style.display = "none";
};


// saving the data in the form when submitting
form.addEventListener("submit", function(event) {
  event.preventDefault();
  addBook(
    form.elements.bookTitle.value,
    form.elements.bookAuthor.value, 
    form.elements.bookGenre.value,
    form.elements.startDate.value,
    form.elements.endDate.value,
    form.elements.bookRating.value,
    form.elements.bookReview.value,
    form.elements.favourite.checked,
  );
  console.log(bookList);
  closeForm();
});

// RANGE NUMBER- have a matching number displayed when the range changes to a specific value  
const bookRating = document.getElementById('bookRating')
bookRating.addEventListener('change', function(event) {
  const bookRatingDisplay = document.getElementById('ratingValue')
  bookRatingDisplay.innerHTML = bookRating.value
});

//outside of the function and inside, because of an error where it thinks the item isnt defined and then doesn't append
let item = document.createElement("li");

function displayBook(book) { //displayTask, task
  let item = document.createElement("li");

  item.setAttribute("data-id", book.id);
  item.innerHTML = `<p><strong>${book.title}</strong><br>${book.genre}</p>`;
  booklist.appendChild(item);
  // Clear the value of the input once the task has been added to the page

  // STAR RATING - create a star matching the input in the form range value
  let starRating = document.createElement("p");
  for (let i = 1; i<=form.elements.bookRating.value; i++) {
    let starRatingText = document.createTextNode("⭐");
    starRating.appendChild(starRatingText);
  }
  item.appendChild(starRating); 

  // FAVOURITED - check if box ticked, then output that it is a favourite book
  let favourited = document.createElement("p");
  if (form.elements.favourite.checked == true) {
    let favouritedText = document.createTextNode("🖤");
    favourited.appendChild(favouritedText);
    item.appendChild(favourited); 
  }

  //Output the time taken to read- calculations(as converts to milliseconds)
  // To calculate the time difference of two dates
  let endDate = new Date(form.elements.endDate.value);
  let startDate = new Date(form.elements.startDate.value);
  let timeDifference = endDate.getTime() - startDate.getTime();
      
  // To calculate the no. of DAYS between two dates
  let daysDifference = timeDifference / (1000 * 3600 * 24);
    
  //To display the final no. of days (result)
  let readingTime = document.createElement("p");
  readingTime.innerHTML = "Reading Time: " + daysDifference + " days";
  item.appendChild(readingTime);
    

  // Setup delete button DOM elements
  let delButton = document.createElement("button");
  let delButtonText = document.createTextNode("🗑️");
  delButton.appendChild(delButtonText);
  item.appendChild(delButton); // Adds a delete button to every task
  // Listen for when the delete button is clicked
  delButton.addEventListener("click", function(event) {
    bookList.forEach(function(bookArrayElement, bookArrayIndex) { //taskArray...
      if (bookArrayElement.id == item.getAttribute('data-id')) {
        bookList.splice(bookArrayIndex, 1)
      }
    })

    // Make sure the deletion worked by logging out the whole array
    console.log(bookList)

    item.remove(); // Remove the task item from the page when button clicked
    // Because we used 'let' to define the item, this will always delete the right element
  })
  
   // Setup view button DOM elements
  let bookPopUpText = document.createElement("p");
  let viewButton = document.createElement("button");
  let viewButtonText = document.createTextNode("🔍");
  viewButton.appendChild(viewButtonText);
  item.appendChild(viewButton); 
  // view button functionality- click to show all the details about the item --> WORKS
  viewButton.addEventListener("click", function(event) {
    bookList.forEach(function(bookArrayElement, bookArrayIndex) { 
      if (bookArrayElement.id == item.getAttribute('data-id')) {
        bookPopUpText.innerHTML = (`<p>
        <strong> Full Book List Item Details </strong>
        <br>Title: ${book.title}
        <br>Author: ${book.author}
        <br>Genre: ${book.genre}
        <br>Dates Read: ${book.startDate} to ${book.endDate}
        <br>Rating: ${book.rating} stars
        <br>Mini Review: ${book.review}
        <br>Favorite Status: ${book.favourite}
        <br>Item ID: ${book.id}
        <br>Item Creation Date: ${book.date}
        </p>`);
        bookPopUp.appendChild(bookPopUpText);
        bookPopUp.style.display = "block";
      }
    })
  })


  form.reset();
};


// Create an array called 'taskList' - week 3 tutorial code
var bookList = [];

// Create a function called 'addTask'
// Give the function input parameters for: name, type, rate, time, client
// Paste your object definition from above in the function
// Replace the property values with the input paramaters
// Add the object to the taskList array

function addBook(title, author, genre, startDate, endDate, rating, review, favourite) {

  // Creating the object, directly passing in the input parameters
  let book = {
    title,
    author,
    genre,
    startDate,
    endDate,
    rating,
    review,
    favourite,
    id: Date.now(),
    date: new Date().toISOString()
  }

  bookList.push(book);
  displayBook(book);

}

// Log the array to the console.
console.log(bookList);



  // Creating the object, directly passing in the input parameters
 // let book = {
 //   title: "Pride and Prejudice",
 //   author: "Jane Austen",
 //   genre: "Romance",
 //   startDate: "2018-07-21",
  //  endDate: "2018-07-22",
 //   rating: "1",
  //  review: "Love this book",
    //favourite: true,
  //  id: Date.now(),
    //date: new Date().toISOString()
  //}

