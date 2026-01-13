document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.project-slide');
    const dotsContainer = document.getElementById('slideDots');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;

    // Créer les dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function goToSlide(n) {
        // Arrêter toutes les vidéos
        slides.forEach(slide => {
            const video = slide.querySelector('video');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });

        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = n;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');

        // Forcer la lecture de la vidéo active
        const activeVideo = slides[currentSlide].querySelector('video');
        if (activeVideo) {
            activeVideo.play().catch(error => {
                console.log("La lecture automatique a été bloquée:", error);
            });
        }
    }

    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

    // Lancer la première vidéo si c'est une vidéo
    const firstVideo = slides[0].querySelector('video');
    if (firstVideo) {
        firstVideo.play().catch(error => {
            console.log("La lecture automatique a été bloquée:", error);
        });
    }

    // Auto-play du slider (optionnel - à commenter si tu ne veux pas)
    // setInterval(() => goToSlide(currentSlide + 1), 5000);
});