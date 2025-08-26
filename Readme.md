1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 

getElementById - To select specific id element using id
getElementsByClassName - To select element using class, it will provide the first class element
querySelector - To select elemet using id or class
querySelectorAll - To select all element using class ( Element as array )


2. How do you create and insert a new element into the DOM?
let newDiv = document.createElement("div");
newDiv.textContent = "Hello, I am new here!";
let container = document.getElementById("body");
container.appendChild(newDiv);

3. What is Event Bubbling and how does it work?
click a element and tigger button event and then the parent element event call and then parent until stopPropagation()

4. What is Event Delegation in JavaScript? Why is it useful?
Works for dynamic elements

5. What is the difference between preventDefault() and stopPropagation() methods?
default action of an element and event from bubbling