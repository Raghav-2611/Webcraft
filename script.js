// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect when scrolling to elements
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});
fadeElements.forEach(element => observer.observe(element));

// Toggle navigation menu for small screens
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.textContent = 'Menu';
document.querySelector('.navbar').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('.navbar ul');
    navLinks.classList.toggle('show');
});

// Styling for fade-in animation and mobile menu toggle (optional inline CSS for demo purposes)
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
    }
    .navbar ul.show {
        display: block;
    }
    @media (max-width: 768px) {
        .navbar ul {
            display: none;
            flex-direction: column;
            text-align: center;
        }
        .nav-toggle {
            display: inline-block;
        }
    }
`;
document.head.appendChild(style);
