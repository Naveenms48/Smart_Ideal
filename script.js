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
    section.addEventListener('touchstart', () => {
      section.classList.add('activeness');
    });

    // When the section losses the touch (Mobile Devices)
    section.addEventListener('touchend', () => {
      section.classList.remove('activeness');
    });

});

var menu = document.querySelector('.menu-btn');
var list_items = document.querySelector('.list-items');

menu.addEventListener('click', () => {
  list_items.classList.toggle('active')
})

// list_items.addEventListener('click', () => {
//   list_items.style.display = 'none'
// })

