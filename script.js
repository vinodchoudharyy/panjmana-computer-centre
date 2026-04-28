 function openForm(course) {
  const formPopup = document.getElementById("formPopup");
  document.getElementById("courseName").value = course;
  formPopup.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeForm() {
  const formPopup = document.getElementById("formPopup");
  formPopup.classList.remove("show");
  document.body.style.overflow = "auto";
  // Reset form
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("courseName").value = "";
}

function sendWhatsApp() {
  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let course = document.getElementById("courseName").value;

  // Validation
  if (!name) {
    alert("Please enter your name!");
    return;
  }
  
  if (!phone || phone.length < 10) {
    alert("Please enter a valid phone number!");
    return;
  }

  let message = `Hello 👋\n\nI want to join the course:\n\n📝 Name: ${name}\n📱 Phone: ${phone}\n📚 Course: ${course}\n\nPlease provide more information about enrollment.`;

  let encodedMessage = encodeURIComponent(message);
  
  window.open(`https://wa.me/916376050539?text=${encodedMessage}`, '_blank');
  
  closeForm();
}

function joinRSCITWhatsApp() {
  let message = `Hello 👋\n\nI am interested in joining the *RSCIT Course*.\n\nPlease provide more information about admission, batch timing, and fees.\n\nThank you!`;

  let encodedMessage = encodeURIComponent(message);
  
  window.open(`https://wa.me/916376050539?text=${encodedMessage}`, '_blank');
}

// Close form when clicking outside
document.addEventListener("DOMContentLoaded", function() {
  const formPopup = document.getElementById("formPopup");
  
  window.addEventListener("click", function(event) {
    if (event.target === formPopup) {
      closeForm();
    }
  });

  // Press Escape to close form
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closeForm();
    }
  });
});

function openGame(){
  document.getElementById("gameModal").style.display = "flex";
}

function closeGame(){
  document.getElementById("gameModal").style.display = "none";
}

function reward(card){
  let rewards = ["10% OFF 🎉","30% OFF 🔥","FREE Course 🏆"];
  let random = rewards[Math.floor(Math.random()*rewards.length)];
  card.innerHTML = random;
  document.getElementById("result").innerText = "You won: " + random;
}

