// Modern Navbar JavaScript
function toggleMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.modern-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active link highlighting
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    function highlightActiveLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveLink);
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navToggle = document.querySelector('.nav-toggle');
            const navLinksContainer = document.querySelector('.nav-links');
            navToggle.classList.remove('active');
            navLinksContainer.classList.remove('active');
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animation Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

// Initialize animations when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.scroll-animate, .fade-in-left, .fade-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));
});