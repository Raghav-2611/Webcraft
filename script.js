document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
    anchor.addEventListener('mouseover', () => {
        anchor.classList.add('bounce');
    });
    anchor.addEventListener('mouseout', () => {
        anchor.classList.remove('bounce');
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

const zoomElements = document.querySelectorAll('.zoom-in');
const zoomObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('zoom');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});
zoomElements.forEach(element => zoomObserver.observe(element));

window.addEventListener('scroll', () => {
    document.querySelectorAll('.parallax').forEach(el => {
        let offset = window.pageYOffset;
        el.style.backgroundPositionY = `${offset * 0.5}px`;
    });
});

const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle', 'pulse');
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
    navToggle.classList.add('rotate');
    setTimeout(() => navToggle.classList.remove('rotate'), 500);
});

closeBtn.addEventListener('click', () => {
    const navLinks = document.querySelector('.navbar ul');
    navLinks.style.animation = 'fadeOut 0.5s';
    setTimeout(() => {
        navLinks.classList.remove('show');
        navLinks.style.animation = '';
    }, 500);
    closeBtn.style.display = 'none';
    navToggle.style.display = 'inline-block';
});
