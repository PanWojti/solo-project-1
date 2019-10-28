'use-strict';

//function toggleMenu(visible) {
//  document.querySelector('.menu').classList.toggle('show', visible)
//}

//document.querySelector('.hamburger').addEventListener('click', function(e) {
//  e.preventDefault();
//  toggleMenu()
//});

if (screen.width < 576) {
  document.querySelector('.container').classList.add('expanded');
  document.querySelector('.sidebar').classList.add('minimized');
  document.querySelector('.topbar').classList.add('hidden');

}

// Toggle Sidebar

function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('minimized', visible);
  document.querySelector('.container').classList.toggle('expanded', visible);
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
  console.log('clicked');
});
