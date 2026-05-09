/* =========================================================
   MELISART — JS principal
   - Header sombra al scroll
   - Menú mobile
   - Scroll reveal con IntersectionObserver
   - WhatsApp links (cambiá WA_NUMBER aquí para actualizar todos)
   ========================================================= */

(function () {
  'use strict';

  /* ---------- WHATSAPP: número centralizado ---------- */
  const WA_NUMBER = '34625330619';

  const WA_MSGS = {
    escribime:     'Hola%20Meli!%20Vi%20tu%20web%20y%20quiero%20escribirte.%20%C2%BFPodemos%20hablar%3F',
    cambio:        'Hola%20Meli!%20Estoy%20lista%20para%20el%20cambio.%20%C2%BFMe%20cont%C3%A1s%20c%C3%B3mo%20empezamos%3F',
    'primer-paso': 'Hola%20Meli!%20Quiero%20dar%20el%20primer%20paso.%20%C2%BFMe%20cont%C3%A1s%20c%C3%B3mo%20funciona%3F',
    activacion:    'Hola%20Meli!%20Vi%20tu%20web%20y%20quiero%20reservar%20una%20*Activaci%C3%B3n*.%20%C2%BFMe%20cont%C3%A1s%20los%20pr%C3%B3ximos%20pasos%3F',
    acompanamiento:'Hola%20Meli!%20Quiero%20info%20sobre%20el%20*Acompa%C3%B1amiento%201%3A1*.%20%C2%BFMe%20cont%C3%A1s%20c%C3%B3mo%20es%20el%20proceso%3F',
    metodo:        'Hola%20Meli!%20Quiero%20aplicar%20al%20*M%C3%A9todo%20MelisArt*.%20%C2%BFMe%20cont%C3%A1s%20c%C3%B3mo%20arranca%20el%20proceso%3F',
    empezar:       'Hola%20Meli!%20No%20s%C3%A9%20bien%20por%20d%C3%B3nde%20empezar.%20%C2%BFMe%20acompa%C3%B1%C3%A1s%20a%20elegir%3F',
  };

  document.querySelectorAll('[data-wa]').forEach((el) => {
    const key = el.getAttribute('data-wa');
    const msg = WA_MSGS[key] || WA_MSGS.escribime;
    el.setAttribute('href', `https://wa.me/${WA_NUMBER}?text=${msg}`);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });

  /* ---------- HEADER: sombra al scrollear ---------- */
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- MENÚ MOBILE ---------- */
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav  = document.querySelector('.mobile-nav');

  if (menuToggle && mobileNav) {
    const closeMenu = () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      mobileNav.classList.remove('is-open');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
      document.body.style.overflow = '';
    };

    const openMenu = () => {
      menuToggle.setAttribute('aria-expanded', 'true');
      mobileNav.classList.add('is-open');
      mobileNav.setAttribute('aria-hidden', 'false');
      document.body.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    };

    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        closeMenu();
      }
    });
  }

  /* ---------- AÑO ACTUAL EN EL FOOTER ---------- */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- SCROLL REVEAL (desactivado) ---------- */
  // Las animaciones de scroll reveal han sido removidas

  /* ---------- MÓDULOS MÉTODO: stagger reveal ---------- */
  const modulos = document.querySelectorAll('.metodo2__modulo');
  if ('IntersectionObserver' in window && modulos.length > 0) {
    const moduloObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = parseInt(entry.target.dataset.modulo || '0', 10);
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, i * 60);
            moduloObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    modulos.forEach((el) => moduloObserver.observe(el));
  } else {
    modulos.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- CARRUSEL DE TESTIMONIOS ---------- */
  (function initCarousel() {
    const cards = document.querySelectorAll('.testimonio-card');
    const dots = document.querySelectorAll('.carousel__dot');
    const btnPrev = document.getElementById('carouselPrev');
    const btnNext = document.getElementById('carouselNext');
    const wrapper = document.getElementById('testimoniosCarousel');

    if (!cards.length || !btnPrev || !btnNext) return;

    let currentIndex = 0;
    let autoPlayTimer = null;
    const TOTAL = cards.length;
    const AUTOPLAY_MS = 10000;
    const FADE_MS = 500;
    let isAnimating = false;

    function showCard(index) {
      if (isAnimating) return;
      isAnimating = true;

      const outgoing = document.querySelector('.testimonio-card.is-active');
      const incoming = cards[index];

      if (outgoing && outgoing !== incoming) {
        outgoing.classList.add('is-fading-out');
        setTimeout(function () {
          outgoing.classList.remove('is-active', 'is-fading-out');
          incoming.classList.add('is-active');
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              incoming.style.opacity = '1';
              isAnimating = false;
            });
          });
        }, FADE_MS);
      } else if (!outgoing) {
        incoming.classList.add('is-active');
        isAnimating = false;
      } else {
        isAnimating = false;
      }

      dots.forEach(function (dot, i) {
        dot.classList.toggle('carousel__dot--active', i === index);
        dot.setAttribute('aria-selected', i === index ? 'true' : 'false');
      });

      currentIndex = index;
    }

    function nextCard() {
      showCard((currentIndex + 1) % TOTAL);
    }

    function prevCard() {
      showCard((currentIndex - 1 + TOTAL) % TOTAL);
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(nextCard, AUTOPLAY_MS);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    showCard(0);
    startAutoPlay();

    btnNext.addEventListener('click', function () {
      nextCard();
      stopAutoPlay();
      startAutoPlay();
    });

    btnPrev.addEventListener('click', function () {
      prevCard();
      stopAutoPlay();
      startAutoPlay();
    });

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var idx = parseInt(dot.dataset.dot, 10);
        showCard(idx);
        stopAutoPlay();
        startAutoPlay();
      });
    });

    if (wrapper) {
      wrapper.addEventListener('mouseenter', stopAutoPlay);
      wrapper.addEventListener('mouseleave', startAutoPlay);
    }

    /* Swipe en mobile */
    var touchStartX = 0;
    var touchEndX = 0;
    var SWIPE_THRESHOLD = 50;

    (wrapper || document).addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });

    (wrapper || document).addEventListener('touchend', function (e) {
      touchEndX = e.changedTouches[0].clientX;
      var delta = touchStartX - touchEndX;
      if (Math.abs(delta) >= SWIPE_THRESHOLD) {
        if (delta > 0) {
          nextCard();
        } else {
          prevCard();
        }
        stopAutoPlay();
        startAutoPlay();
      }
    }, { passive: true });
  }());

})();
