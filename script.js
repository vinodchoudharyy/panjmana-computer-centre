document.addEventListener('DOMContentLoaded', function () {

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
  }

  window.closeForm = function () {
    document.getElementById('formPopup').classList.remove('show');
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

      // Show reward on clicked card
      this.innerHTML = reward;
      this.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
      this.style.color = '#1a1a2e';
      this.style.fontWeight = 'bold';

      // Show result text
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
  // NAVBAR EFFECT
  // =========================
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(255,255,255,0.95)';
      navbar.style.backdropFilter = 'blur(20px)';
    } else {
      navbar.style.background = 'white';
    }
  });

});