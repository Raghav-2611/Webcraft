// Smooth Scroll and Link Effects
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    ['mouseover', 'mouseout'].forEach(event => {
        anchor.addEventListener(event, () => {
            anchor.classList.toggle('bounce', event === 'mouseover');
            anchor.classList.toggle('flip-3d', event === 'mouseover');
        });
    });
});

// Fade-In Effect with Delay
const fadeElements = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.15}s`;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

fadeElements.forEach(el => {
    fadeObserver.observe(el);
    el.addEventListener('mouseenter', () => el.classList.add('tilt-3d'));
    el.addEventListener('mouseleave', () => el.classList.remove('tilt-3d'));
});

// Zoom-In Elements
const zoomElements = document.querySelectorAll('.zoom-in');
const zoomObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('zoom');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

zoomElements.forEach(el => zoomObserver.observe(el));

// Parallax Background Effect (Optimized)
const parallaxElements = document.querySelectorAll('.parallax');
window.addEventListener('scroll', () => {
    requestAnimationFrame(() => {
        const offset = window.pageYOffset;
        parallaxElements.forEach(el => {
            el.style.backgroundPositionY = `${offset * 0.5}px`;
        });
    });
});

// Responsive Nav Toggle
const navbar = document.querySelector('.navbar');
const navToggle = document.createElement('button');
const closeBtn = document.createElement('button');

navToggle.className = 'nav-toggle pulse';
navToggle.setAttribute('aria-label', 'Open menu');
navToggle.textContent = '☰';

closeBtn.className = 'close-menu';
closeBtn.setAttribute('aria-label', 'Close menu');
closeBtn.textContent = '✖';
closeBtn.style.display = 'none';

navbar.append(navToggle, closeBtn);

navToggle.addEventListener('click', () => {
    const navLinks = navbar.querySelector('ul');
    navLinks.classList.toggle('show');
    navToggle.style.display = 'none';
    closeBtn.style.display = 'inline-block';
    navToggle.classList.add('spin-3d');
    setTimeout(() => navToggle.classList.remove('spin-3d'), 500);
});

closeBtn.addEventListener('click', () => {
    const navLinks = navbar.querySelector('ul');
    navLinks.style.animation = 'fadeOut 0.5s';
    setTimeout(() => {
        navLinks.classList.remove('show');
        navLinks.style.animation = '';
    }, 500);
    navToggle.style.display = 'inline-block';
    closeBtn.style.display = 'none';
});

// Optional: Dark Mode Toggle
const themeBtn = document.createElement('button');
themeBtn.textContent = '🌓';
themeBtn.className = 'theme-toggle';
themeBtn.setAttribute('aria-label', 'Toggle dark mode');
document.body.appendChild(themeBtn);

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
