document.querySelectorAll('section').forEach(section => {
    // When the mouse enters the section
    section.addEventListener('mouseenter', () => {
      section.classList.add('activeness');
    });

    // When the mouse leaves the section
    section.addEventListener('mouseleave', () => {
      section.classList.remove('activeness');
    });

    // When the section is focused (keyboard interaction)
    section.addEventListener('focusin', () => {
      section.classList.add('activeness');
    });

    // When the section loses focus (keyboard interaction)
    section.addEventListener('focusout', () => {
      section.classList.remove('activeness');
    });

    // When the section is touched (Mobile Devies)
    section.addEventListener('touchstart', (e) => {
      // console.log('Touch Start');
      section.classList.add('activeness');
    });

    // When the section losses the touch (Mobile Devices)
    // section.addEventListener('touchmove', (e) => {
      // console.log('Touch Move');
      // section.classList.remove('activeness');
    // });

    // section.addEventListener('touchend', (e) => {
    //   console.log('Touch End');
    //   section.classList.remove('activeness');
    // });

});

var menu = document.querySelector('.menu-btn');
var list_items = document.querySelector('.list-items');

menu.addEventListener('click', () => {
  list_items.classList.toggle('active')
})

// document.addEventListener("DOMContentLoaded", function () {
//   var menuButton = document.querySelector('.menu-btn');
//   var menuList = document.querySelector('.list-items');
//   var menuItems = document.querySelectorAll(".list-items li a");

//   if (menuButton && menuList) {
//       // Ensure the menu is hidden initially
//       // menuList.style.display = "none";

//       // Toggle menu visibility when clicking the menu button
//       menuButton.addEventListener('click', function () {
//           if (menuList.style.display === "none" || menuList.style.display === "") {
//               menuList.style.display = "block";
//           } else {
//               menuList.style.display = "none";
//           }
//       });

//       // Hide menu when clicking a menu item
//       menuItems.forEach(item => {
//           item.addEventListener("click", function () {
//               menuList.style.display = "none";
//           });
//       });
//   } else {
//       console.error("Menu button or list items not found!");
//   }
// });
