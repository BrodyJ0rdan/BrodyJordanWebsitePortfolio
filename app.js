// Get all sections and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#navbar ul li a');

// Function to highlight the active section
function highlightActiveSection() {
    let currentSection = '';

    // Check which section is in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Highlight the corresponding navigation link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
}

// Add event listener for scroll
window.addEventListener('scroll', highlightActiveSection);

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get all list items and hover text elements
const hobbiesListItems = document.querySelectorAll('.hobbies-list li');
const hoverTexts = document.querySelectorAll('.hover-text');

// Add event listeners for hover
hobbiesListItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        const hoverId = item.getAttribute('data-hover');
        hoverTexts.forEach((text) => {
            if (text.id === `hover-text-${hoverId}`) {
                text.style.display = 'block'; // Show corresponding text
            } else {
                text.style.display = 'none'; // Hide other text
            }
        });
    });

    item.addEventListener('mouseleave', () => {
        hoverTexts.forEach((text) => {
            text.style.display = 'none'; // Hide all text on mouse leave
        });
    });
});