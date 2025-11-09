document.addEventListener('DOMContentLoaded', () => {
  // --- NAV TOGGLE ---
  const toggleBtn = document.querySelector('.toggle-btn');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if (toggleBtn && dropdownMenu) {
    const toggleIcon = toggleBtn.querySelector('i');

    toggleBtn.addEventListener('click', () => {
      dropdownMenu.classList.toggle('open');

      if (toggleIcon) {
        const isOpen = dropdownMenu.classList.contains('open');
        toggleIcon.classList.toggle('fa-bars', !isOpen);
        toggleIcon.classList.toggle('fa-xmark', isOpen);
        // Si tu es en FA5, utilise .fa-times à la place de .fa-xmark
        // toggleIcon.classList.toggle('fa-times', isOpen);
      }
    });
  }

  // --- DONNÉES "team" (non utilisées ici mais OK) ---
  const team = [
    { name: "Saveur Bouchères", role: "Figma" },
    { name: "Festival Afro-Caribbean", role: "Photoshop" },
    { name: "Barbie", role: "Photoshop" },
    { name: "Beauty of Darkess", role: "Photoshop" },
  ];

  // --- CURSEUR PERSONNALISÉ ---
  const cursor = document.querySelector('.cursor');
  const cursorIcon = cursor ? cursor.querySelector('i') : null;

  let currentSlide = 1;
  const totalSlides = 4; // cohérent avec ton tableau "team"

  if (cursor) {
    let cursorWidth = cursor.offsetWidth / 2;
    let cursorHeight = cursor.offsetHeight / 2;

    const updateCursorClass = (xPosition) => {
      const halfPageWidth = window.innerWidth / 2;
      if (!cursorIcon) return;

      // Indique gauche/droite visuellement
      if (xPosition > halfPageWidth) {
        cursorIcon.classList.add('fi-rs-arrow-right');
        cursorIcon.classList.remove('fi-rs-arrow-left');
      } else {
        cursorIcon.classList.add('fi-rs-arrow-left');
        cursorIcon.classList.remove('fi-rs-arrow-right');
      }

      // Affiche/masque le curseur si on est à la fin
      if (currentSlide >= totalSlides) {
        cursor.style.display = 'none';
      } else {
        cursor.style.display = '';
      }
    };

    // Suivi souris (GSAP si dispo, sinon fallback CSS transform)
    document.addEventListener('mousemove', (e) => {
      const x = e.clientX - cursorWidth;
      const y = e.clientY - cursorHeight;

      if (window.gsap) {
        gsap.to(cursor, { x, y, duration: 0.2, ease: 'power3.out' });
      } else {
        cursor.style.transform = `translate(${x}px, ${y}px)`;
      }

      updateCursorClass(e.clientX);
    });

    // Recalcule aux changements de taille
    window.addEventListener('resize', () => {
      cursorWidth = cursor.offsetWidth / 2;
      cursorHeight = cursor.offsetHeight / 2;
    });
  }

  // --- SLIDES (exemple minimal pour éviter la fonction incomplète) ---
  const goNext = () => {
    if (currentSlide < totalSlides) {
      currentSlide += 1;
    }
  };
  const goPrev = () => {
    if (currentSlide > 1) {
      currentSlide -= 1;
    }
  };
  });