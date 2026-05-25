// script.js
// Page Navigation
const pages = {
  home: document.getElementById('home-page'),
  about: document.getElementById('about-page'),
  contact: document.getElementById('contact-page')
};

const navLinks = document.querySelectorAll('.nav-link');

function switchPage(pageId) {
  // Hide all pages
  Object.values(pages).forEach(page => {
    if (page) page.classList.remove('active-page');
  });
  
  // Show selected page
  if (pages[pageId]) pages[pageId].classList.add('active-page');
  
  // Update active class on navigation
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === pageId) {
      link.classList.add('active');
    }
  });
}

// Add click event listeners
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const pageId = link.getAttribute('data-page');
    if (pageId) switchPage(pageId);
  });
});

// Initialize with home page active
switchPage('home');