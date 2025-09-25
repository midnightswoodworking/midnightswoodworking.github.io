// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }
});

// Testimonials Slider
let slideIndex = 1;

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].classList.add('active');
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}

// Auto-advance testimonials
function autoSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

// Start auto-slide when page loads
document.addEventListener('DOMContentLoaded', function() {
    showSlide(slideIndex);
    setInterval(autoSlide, 5000); // Change slide every 5 seconds
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(254, 254, 254, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(254, 254, 254, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.custom-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Add loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Reset button after 3 seconds (form will redirect)
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
        });
    }
});

// Add animation classes when elements come into view
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.category-card, .step, .faq-item');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
});

// Venmo link with order memo
function createVenmoLink(productType = '', customDetails = '') {
    const baseUrl = 'https://venmo.com/u/terrybridenbaker';
    let memo = 'Order from Midnight\'s Woodworking';
    
    if (productType) {
        memo += ` - ${productType}`;
    }
    
    if (customDetails) {
        memo += ` - ${customDetails}`;
    }
    
    // Note: Venmo doesn't support URL parameters for memo like Cash App does
    // Users will need to manually add the memo
    return baseUrl;
}

// Enhanced category card interactions
document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent;
            const venmoLink = createVenmoLink(categoryName);
            
            // Show a modal or alert with ordering instructions
            const message = `To order ${categoryName}, please:\n\n1. Click "Order with Venmo" below\n2. Add "${categoryName} order" in the payment memo\n3. We'll contact you to confirm details\n\nWould you like to proceed to Venmo?`;
            
            if (confirm(message)) {
                window.open(venmoLink, '_blank', 'noopener');
            }
        });
        
        // Add hover effect for better UX
        card.style.cursor = 'pointer';
    });
});

// FAQ accordion functionality (optional enhancement)
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        // Initially hide answers (optional)
        // answer.style.display = 'none';
        
        question.addEventListener('click', function() {
            // Toggle answer visibility
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                question.style.cursor = 'pointer';
            } else {
                // answer.style.display = 'none';
            }
        });
        
        question.style.cursor = 'pointer';
    });
});

// Performance optimization: Preload critical resources
document.addEventListener('DOMContentLoaded', function() {
    // Preload hero image
    const heroImg = new Image();
    heroImg.src = 'assets/img/hero-product.webp';
    
    // Preload category images
    const categoryImages = [
        'assets/img/coasters-category.webp',
        'assets/img/holders-category.webp',
        'assets/img/jewelry-cups-category.webp',
        'assets/img/boards-category.webp',
        'assets/img/custom-category.webp'
    ];
    
    categoryImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

// Error handling for missing images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Replace with placeholder or hide
            this.style.display = 'none';
            console.warn(`Failed to load image: ${this.src}`);
        });
    });
});

// Analytics and tracking (placeholder for future implementation)
function trackEvent(eventName, eventData = {}) {
    // Placeholder for analytics tracking
    console.log(`Event: ${eventName}`, eventData);
    
    // Example: Google Analytics 4
    // gtag('event', eventName, eventData);
    
    // Example: Facebook Pixel
    // fbq('track', eventName, eventData);
}

// Track important user interactions
document.addEventListener('DOMContentLoaded', function() {
    // Track Venmo button clicks
    const venmoButtons = document.querySelectorAll('a[href*="venmo.com"]');
    venmoButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('venmo_click', {
                button_location: this.closest('section')?.id || 'unknown'
            });
        });
    });
    
    // Track form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            trackEvent('form_submit', {
                form_type: 'custom_request'
            });
        });
    });
    
    // Track category card clicks
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent;
            trackEvent('category_click', {
                category: categoryName
            });
        });
    });
});

