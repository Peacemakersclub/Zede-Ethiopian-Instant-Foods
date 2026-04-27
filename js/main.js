/**
 * Zede Ethiopian Instant Foods
 * Main JavaScript File
 */

// ============================================
// Mobile Navigation Toggle
// ============================================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    
    // Toggle icon between bars and X
    const icon = navToggle.querySelector('i');
    if (icon) {
      if (navMenu.classList.contains('show')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    }
  });

  // Close menu when clicking a link (for mobile)
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('show');
        const icon = navToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  });
}

// ============================================
// Contact Form Handling
// ============================================
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !message) {
      showFeedback('Please fill in all required fields.', 'error');
      return;
    }
    
    if (!isValidEmail(email)) {
      showFeedback('Please enter a valid email address.', 'error');
      return;
    }
    
    // Simulate form submission
    // In production, replace with actual API call
    showFeedback('Thank you for your message! We will get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
    
    // Clear feedback after 5 seconds
    setTimeout(() => {
      if (formFeedback) {
        formFeedback.style.display = 'none';
      }
    }, 5000);
  });
}

/**
 * Show feedback message
 * @param {string} message - The message to display
 * @param {string} type - 'success' or 'error'
 */
function showFeedback(message, type) {
  if (!formFeedback) return;
  
  formFeedback.textContent = message;
  formFeedback.style.display = 'block';
  
  if (type === 'success') {
    formFeedback.style.background = '#e8f5e9';
    formFeedback.style.color = '#2d5a27';
    formFeedback.style.border = '1px solid #a5d6a7';
  } else {
    formFeedback.style.background = '#fce4ec';
    formFeedback.style.color = '#b33a2a';
    formFeedback.style.border = '1px solid #ef9a9a';
  }
}

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ============================================
// Smooth Scroll for anchor links (fallback)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// Add active class to current page link
// ============================================
(function setActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav__link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || 
        (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });
})();

console.log('Zede Ethiopian Instant Foods - Website Ready');
