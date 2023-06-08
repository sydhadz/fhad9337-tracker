# fhad9337-tracker

**Documentation**

**Development Process**

I have developed the backend and frontend of this minimal web application by using HTML, CSS, and JS with added features from node.js, and Sass. GitHub was used from start to end for version control and code repository hosting, as can be viewed by my commits. This web application has a single page architecture, and includes a pop-up for the form. 

**Iterations/ Improvements made since the Static Design**

I implemented the same data model as was discussed in the previous assignment. However, I have changed the UI to be more simplistic and continue to follow best practices- specifically with the form design (labels ontop of inputs, one column, feedback when active and hovering, etc.). There are interactions to add the tracked items (books) to the library, as well as capability to view and delete said items. There is some persistence between sessions, mainly in the console with shows submitted items from previous sessions. 

**App Configuration**

The setup is seamless and easy to configure for future developers, as the code isn’t too complex and maintains the correct syntax. Classes and Ids were used to assist in ease of understanding the application. It can be run easily on a local computer by using the live port on VSC, by running ‘npm run dev’, or through this GitHub. The application saves the user data from each session as an array in the console. Moreover, the application is seamlessly responsive from a Laptop screen size to an iPhone SE. When opening the app, press on the main button and fill out the form, see your book on the list after submitting and press the magnifying glass to view all the details, or the delete button to remove the item from your list. 

**Deployment Procedures** 
This app only needs to be deployed by using ‘Open with Live Server’ when opening the file in Visual Studio Code, or by commanding ‘npm run dev’ in the terminal. 

**Guidance and Recommendations for future developers** 
To understand the code, just read the comments above each section and keep track of the ids and classes for each element. This will help to build upon the work, without too much confusion. Recommendations for future improvements include adding pagination for when a certain number of items are added, as well as having items from local storage display correctly as an item on the page when refreshing the browser. It may also be beneficial to improve the UI of each item to increase aestheticness.
 
**Challenges faced that overcame + lessons learnt**
In reflection, I have greatly underestimated the time and effort it takes to code a simple web application. A main challenge is not having enough practice with coding and using certain elements, specifically javascript functions. I learnt how to search for assistance and use others for inspiration. 


**References:**
https://www.w3schools.com/howto/howto_js_popup_form.asp 
https://www.teachucomp.com/special-characters-in-html-tutorial/ 
https://www.youtube.com/watch?v=xJKiuovQcPA&ab_channel=NorbertBMWebDevelopment --> used to get sass working on npm run dev and opening with live server 
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#setting_maximum_and_minimum_dates 
https://www.masterclass.com/articles/what-are-the-different-genres-of-literature-a-guide-to-14-literary-genres 
https://stackoverflow.com/questions/44679128/createelement-within-for-loop // to create star rating
https://www.w3schools.com/howto/howto_js_rangeslider.asp // create range number on slider
https://www.w3schools.com/charsets/ref_emoji.asp // emojis used for styling favoruites, delete etc 
https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp // checkbox checking if checked
https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/ // to display the reading time between dates 
https://medium.com/@prvnbist/css-grid-cards-layout-aspect-ratio-7544e905dff1 // creating the cards from li elements
https://stackoverflow.com/questions/17541043/show-image-based-on-selected-category-in-html //img linked to dropdown select option
https://stackoverflow.com/questions/60181447/access-localstorage-array-by-index // trying to show local storage items on refresh

Images from google image search
