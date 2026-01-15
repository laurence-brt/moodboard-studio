// Menu hamburger toggle
const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.getElementById('navLinks');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// HERO SLIDER
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dots .dot');
const totalSlides = slides.length;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + totalSlides) % totalSlides;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Arrow navigation
document.getElementById('nextSlide').addEventListener('click', nextSlide);
document.getElementById('prevSlide').addEventListener('click', prevSlide);

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

// Auto slide
setInterval(nextSlide, 5000);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') prevSlide();
});

// PORTFOLIO SLIDER
const portfolioCards = document.getElementById('portfolioCards');
const prevBtn = document.querySelector('.slider-nav-btn.prev');
const nextBtn = document.getElementById('nextBtn');

let scrollPosition = 0;
const cardWidth = 160; // 150px width + 10px gap

nextBtn.addEventListener('click', () => {
    const maxScroll = portfolioCards.scrollWidth - portfolioCards.parentElement.offsetWidth;
    scrollPosition = Math.min(scrollPosition + cardWidth, maxScroll);
    portfolioCards.style.transform = `translateX(-${scrollPosition}px)`;
});

prevBtn.addEventListener('click', () => {
    scrollPosition = Math.max(scrollPosition - cardWidth, 0);
    portfolioCards.style.transform = `translateX(-${scrollPosition}px)`;
});

// Animation au scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(el);
});