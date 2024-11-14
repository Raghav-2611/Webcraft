document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start' 
        });
    });
});

const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.2}s`;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});
fadeElements.forEach(element => observer.observe(element));

const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.textContent = 'Menu';
document.querySelector('.navbar').appendChild(navToggle);

const closeBtn = document.createElement('button');
closeBtn.classList.add('close-menu');
closeBtn.textContent = 'X';
closeBtn.style.display = 'none';
document.querySelector('.navbar').appendChild(closeBtn);

navToggle.addEventListener('click', () => {
    const navLinks = document.querySelector('.navbar ul');
    navLinks.classList.toggle('show');
    closeBtn.style.display = 'inline-block';
    navToggle.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    const navLinks = document.querySelector('.navbar ul');
    navLinks.classList.remove('show');
    closeBtn.style.display = 'none'; 
    navToggle.style.display = 'inline-block'; 
});
