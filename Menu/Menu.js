/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// function createMenu(array) {
//   //declare variables
//   let menuDiv = document.createElement('div');
//   let list = document.createElement('ul');
//   let newArray = [];
//   array.forEach(function() {
//     newArray.push(document.createElement('li'));
//     console.log('newArray: ', newArray);    
//   });
// // setup structure
//   menuDiv.appendChild(list);
//   newArray.forEach(function(item) {
//     list.appendChild(item);
//   })
// // add classes
//   menuDiv.classList.add('menu');
//   // set text content
//   newArray.forEach(function(item, index) {
//     item.textContent = newArray[index];
//   })
// // setup menu button
//   const menuButton = document.querySelector('.menu-button');
//   menuButton.addEventListener('click', function() {
//     menuDiv.classList.toggle('menu--open');
//   });

//   return menuDiv;
// }

// createMenu(menuItems);

function makeMenu(menuItemArr) {
  // Declare Variables
  const menu = document.createElement('div');
  const menuUl = document.createElement('ul');
  const menuLiArr = [];
  menuItemArr.forEach(function(){
    menuLiArr.push(document.createElement('li'))
  })
  // Setup Structure
  menu.appendChild(menuUl);
  menuLiArr.forEach(function(item){
    menuUl.appendChild(item);
  });
  // Add Classes
  menu.classList.add('menu');
  // Set Text Content
  menuLiArr.forEach(function(item,index){
    item.textContent = menuItemArr[index];
  })
  // Setup Menu Button
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', function(){
    menu.classList.toggle('menu--open')
  })
  // Return Component
  return menu;
}

makeMenu(menuItems);