Entry #1  
Tool Used: ChatGPT  
Prompt (copy-paste exactly):  
How do I make my projects section in JavaScript show project cards automatically using an array?  

AI Output (summary or screenshot reference):  
The AI explained how to store project data in an array of objects, then loop through the array using `forEach()`. It suggested using `createElement()` and `appendChild()` to build project cards and display them inside the `projects-section` container.  

How I used it in my project:  
I used this idea to create my Projects / Portfolio section dynamically. I made an array called `projects`, then used JavaScript to generate each project card with a title and description and append them into the `#projects-section` div.


Entry #2  
Tool Used: ChatGPT  
Prompt (copy-paste exactly):  
Can you help me make a contact form validation in JavaScript that checks if the name, email, and message are empty?  

AI Output (summary or screenshot reference):  
The AI provided a JavaScript example using `addEventListener("submit", ...)`, `getElementById()`, and `trim()` to check if the form fields were empty. It also showed how to display an error message in red or a success message in green.  

How I used/modified it in my project:  
I applied this to my contact form with the fields Name, Email, and Message. In my `script.js`, I used the validation logic so that if any field is empty, it shows “Please fill out all fields.” If all fields are completed, it shows “Message sent successfully!”


Entry #3  
Tool Used: ChatGPT  
Prompt (copy-paste exactly):  
How can I make a search bar for my skills section using JavaScript so the skills hide and show while I type?  

AI Output (summary or screenshot reference):  
The AI suggested using a `keyup` event on the search input, then comparing the typed text with each skill’s text content. Matching skills remain visible, while non-matching skills are hidden.  

How I used/modified it in my project:  
I used this for my Skills section. I added a search box with the id `skillSearch`, then used JavaScript to filter the `.skill` elements in real time as the user types.


Entry #4  
Tool Used: ChatGPT  
Prompt (copy-paste exactly):  
How do I make a button that shows and hides my projects section using jQuery?  

AI Output (summary or screenshot reference):  
The AI suggested using jQuery with `$(document).ready()`, selecting the button with `#toggleProjectsBtn`, and using `slideToggle()` to show and hide the projects section when clicked. It also suggested changing the button text from “Show Projects” to “Hide Projects.”  

How I used/modified it in my project:  
I used this in my jQuery code. When the user clicks the Show Projects button, the `#projects-section` slides open or closed. I also used `.text()` to change the button label depending on whether the section is visible or hidden.


Entry #5  
Tool Used: ChatGPT  
Prompt (copy-paste exactly):  
How can I make my skills highlight when I click them using jQuery?  

AI Output (summary or screenshot reference):  
The AI recommended using a click event with `on("click", ...)` and applying `toggleClass("active")` to the clicked skill. It also explained that the `.active` class can be styled in CSS to change the background color.  

How I used/modified it in my project:  
I applied this to my skill tags in the Skills section. When a user clicks a skill, jQuery adds or removes the `active` class, which changes its appearance and makes the page more interactive.
