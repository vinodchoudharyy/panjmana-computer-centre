document.addEventListener('DOMContentLoaded', function () {

  // =========================
  // MOBILE NAVBAR TOGGLE
  // =========================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      const isOpen = navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      navMenu.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  // =========================
  // FORM POPUP - CLOSE ON BACKDROP CLICK
  // =========================
  const formPopup = document.getElementById('formPopup');
  if (formPopup) {
    formPopup.addEventListener('click', function(e) {
      if (e.target === formPopup) {
        closeForm();
      }
    });
  }

  // =========================
  // MODAL - CLOSE ON BACKDROP CLICK
  // =========================
  const modal = document.getElementById('gameModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeGame();
      }
    });
  }

  // =========================
  // CONTACT FORM
  // =========================
  const contactForm = document.querySelector('.contact-card');

  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          const button = contactForm.querySelector('.contact-submit-btn');
          const originalText = button.innerHTML;

          button.innerHTML = '✅ Message Sent Successfully!';
          button.style.background = '#00c896';
          button.disabled = true;

          setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
            button.disabled = false;
            contactForm.reset();
          }, 3000);

        } else {
          alert('Something went wrong. Please try again.');
        }

      } catch (error) {
        alert('Network error. Please try again.');
      }
    });
  }

  // =========================
  // POPUP FORM
  // =========================
  window.openForm = function (course) {
    document.getElementById('courseName').value = course;
    document.getElementById('formPopup').classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  window.closeForm = function () {
    document.getElementById('formPopup').classList.remove('show');
    document.body.style.overflow = '';
  }

  window.sendWhatsApp = function () {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('courseName').value;

    const message = `Hi, I want to join ${course}\nName: ${name}\nPhone: ${phone}`;
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
    closeForm();
  }

  // =========================
  // GAME LOGIC
  // =========================
  const rewards = ["10% OFF", "30% OFF", "FREE 🎉"];
  let gamePlayed = false;

  const resultEl = document.getElementById("result");
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {

      if (gamePlayed) return;

      const reward = rewards[Math.floor(Math.random() * rewards.length)];

      this.innerHTML = reward;
      this.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
      this.style.color = '#1a1a2e';
      this.style.fontWeight = 'bold';

      resultEl.innerHTML = `🎉 You won: ${reward}!`;

      gamePlayed = true;
    });
  });

  // Reset Game
  window.resetGame = function () {
    cards.forEach(card => {
      card.innerHTML = "?";
      card.style.background = '';
      card.style.color = '';
      card.style.fontWeight = '';
    });

    resultEl.innerHTML = "";
    gamePlayed = false;
  }

  // Open/Close Game Modal
  window.openGame = function() {
    window.resetGame(); // Reset game state each time it's opened
    const modal = document.getElementById('gameModal');
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  window.closeGame = function() {
    const modal = document.getElementById('gameModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // =========================
  // SMOOTH SCROLL
  // =========================
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

  // =========================
  // RSCIT WHATSAPP JOIN
  // =========================
  window.joinRSCITWhatsApp = function() {
    const message = "Hi, I am interested in joining the RSCIT Course. Please provide more details about admission, schedule, and fees.";
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  // =========================
  // NAVBAR EFFECT
  // =========================
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
      navbar.style.background = 'rgba(255,255,255,0.95)';
      navbar.style.backdropFilter = 'blur(20px)';
    } else {
      navbar.classList.remove('scrolled');
      navbar.style.background = '';
      navbar.style.backdropFilter = '';
    }
  });

});