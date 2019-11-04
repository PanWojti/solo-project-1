'use-strict';

if (screen.width < 576) {
  document.querySelector('.main').classList.add('expanded');
  document.querySelector('.sidebar').classList.add('minimized');
  document.querySelector('.topbar').classList.add('hidden');
  document.querySelector('.hidden-topbar').classList.add('visible');
  console.log('screen width < 576');

}

// Toggle Sidebar

function toggleMenu(visible) {
  document.querySelector('.sidebar').classList.toggle('minimized', visible);
  document.querySelector('.main').classList.toggle('expanded', visible);
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
  console.log('clicked');
});
