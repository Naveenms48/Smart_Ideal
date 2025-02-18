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

    section.addEventListener('scroll', () => {
      section.classList.add('activeness');
    });

    // When the section loses focus (keyboard interaction)
    section.addEventListener('scroll', () => {
      section.classList.remove('activeness');
    });

});

var menu = document.querySelector('.menu-btn');
var list_items = document.querySelector('.list-items');

menu.addEventListener('click', () => {
  list_items.classList.toggle('active')
})