
// Smooth Scroll
document.querySelectorAll('.nav-link').forEach(anchor => {
anchor.addEventListener('click', function (e) {
 e.preventDefault();

 document.querySelector(this.getAttribute('href')).scrollIntoView({
     behavior: 'smooth',
     block: 'start'
 });
});
});

// Scroll Effect for Navbar
window.onscroll = function () {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
 document.querySelector('.navbar').classList.add('scrolled');
} else {
 document.querySelector('.navbar').classList.remove('scrolled');
}
};

// Intersection Observer for Section Animations
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
 if (entry.isIntersecting) {
     entry.target.classList.add('visible');
 }
});
});

document.querySelectorAll('.fade-in').forEach(section => {
observer.observe(section);
});

function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById("themeIcon");

    // Toggle theme classes
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    // Change SVG color based on theme
    if (body.classList.contains("dark-mode")) {
        icon.setAttribute("fill", "#ffffff");
        icon.setAttribute("stroke", "#ffffff");
    } else {
        icon.setAttribute("fill", "#000000");
        icon.setAttribute("stroke", "#000000");
    }
}


// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
 event.preventDefault();
 const name = document.getElementById('name').value;
 const email = document.getElementById('email').value;
 const message = document.getElementById('message').value;

 if (name && email && message) {
     alert('Message sent successfully!');
     this.reset();
 } else {
     alert('Please fill out all fields.');
 }
});

// Footer Animation
document.addEventListener('DOMContentLoaded', function() {
const footerItems = document.querySelectorAll('.footer-item');

// Add fade-in animation to footer items
footerItems.forEach((item, index) => {
 item.style.opacity = '0';
 item.style.transform = 'translateY(20px)';
 
 setTimeout(() => {
     item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
     item.style.opacity = '1';
     item.style.transform = 'translateY(0)';
 }, 100 * index);
});

// Responsive font size adjustment
function adjustFooterFontSize() {
 const width = window.innerWidth;
 const footerText = document.querySelectorAll('.footer-item, .copyright');
 
 if (width < 576) {
     footerText.forEach(el => el.style.fontSize = '0.9rem');
 } else if (width < 768) {
     footerText.forEach(el => el.style.fontSize = '0.95rem');
 } else {
     footerText.forEach(el => el.style.fontSize = '1rem');
 }
}

// Call on load and resize
adjustFooterFontSize();
window.addEventListener('resize', adjustFooterFontSize);
});