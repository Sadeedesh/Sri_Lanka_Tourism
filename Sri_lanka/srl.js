

// Smooth scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Show welcome alert
function showWelcome() {
    alert('Welcome to Sri Lanka - The Pearl of the Indian Ocean!');
}

// Toggle mobile menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close mobile menu
function closeMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
}

// Image lazy loading
function lazyLoadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
}

// Responsive viewport adjustment
function adjustViewport() {
    if (window.innerWidth <= 768) {
        document.body.classList.add('mobile-view');
    } else {
        document.body.classList.remove('mobile-view');
    }
}

// Responsive hotel gallery adjustment
function adjustHotelGallery() {
    const galleries = document.querySelectorAll('.responsive');
    const screenWidth = window.innerWidth;
    
    galleries.forEach(gallery => {
        if (screenWidth <= 480) {
            gallery.style.setProperty('width', '100%', 'important');
            gallery.style.setProperty('float', 'none', 'important');
        } else if (screenWidth <= 768) {
            gallery.style.setProperty('width', '50%', 'important');
            gallery.style.setProperty('float', 'left', 'important');
        } else {
            gallery.style.setProperty('width', '25%', 'important');
            gallery.style.setProperty('float', 'left', 'important');
        }
    });
}

// Initialize functions when page loads
document.addEventListener('DOMContentLoaded', function() {
    lazyLoadImages();
    adjustViewport();
    adjustHotelGallery();
    
    // Add click events to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.textContent.includes('More Details')) {
            button.onclick = () => scrollToSection('travel-info');
        }
        if (button.textContent.includes('Sign in')) {
            button.onclick = showWelcome;
        }
    });
    
    // Add click events to nav links for auto-close
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                setTimeout(closeMenu, 300);
            }
        });
    });
    
    // Make functions global
    window.toggleMenu = toggleMenu;
    window.closeMenu = closeMenu;
});

// Responsive resize handler
window.addEventListener('resize', function() {
    adjustViewport();
    adjustHotelGallery();
});