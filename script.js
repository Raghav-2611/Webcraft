// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Ensure scrolling to the top of the section
        });
    });
});

// Fade-in effect when scrolling to elements with a delay
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Adding a delay for each element to create a staggered effect
            entry.target.style.transitionDelay = `${index * 0.2}s`;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3 // Trigger animation when 30% of the element is in view
});
fadeElements.forEach(element => observer.observe(element));

// Toggle navigation menu for small screens with close button
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.textContent = 'Menu';
document.querySelector('.navbar').appendChild(navToggle);

// Create a close button for mobile menu
const closeBtn = document.createElement('button');
closeBtn.classList.add('close-menu');
closeBtn.textContent = 'X';
closeBtn.style.display = 'none';
document.querySelector('.navbar').appendChild(closeBtn);

// Toggle navigation links and close menu button visibility
navToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('.navbar ul');
    navLinks.classList.toggle('show');
    closeBtn.style.display = 'inline-block'; // Show close button
    navToggle.style.display = 'none'; // Hide the menu button when open
});

// Close the menu when clicking the close button
closeBtn.addEventListener('click', () => {
    const navLinks = document.querySelector('.navbar ul');
    navLinks.classList.remove('show');
    closeBtn.style.display = 'none'; // Hide the close button
    navToggle.style.display = 'inline-block'; // Show the menu button again
});

// Styling for fade-in animation, mobile menu toggle, and mobile menu behavior
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .appear {
        opacity: 1;
        transform: translateY(0);
    }
    .nav-toggle {
        display: none;
        background-color: #333;
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        font-size: 1.2em;
    }
    .close-menu {
        display: none;
        background-color: #333;
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
        font-size: 1.2em;
    }
    .navbar ul.show {
        display: block;
    }
    .navbar ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .navbar li {
        margin: 0 15px;
    }
    @media (max-width: 768px) {
        .navbar ul {
            display: none;
            flex-direction: column;
            text-align: center;
            background-color: #333;
            position: absolute;
            top: 50px;
            width: 100%;
            z-index: 1000;
        }
        .navbar ul.show {
            display: block;
        }
        .nav-toggle {
            display: inline-block;
        }
    }
`;
document.head.appendChild(style);
