// Dark Mode Toggle
const darkBtn = document.getElementById('darkModeBtn');
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkBtn.textContent = document.body.classList.contains('dark-mode')
    ? 'Light Mode'
    : 'Dark Mode';
});

// Typed.js Animation
new Typed(".typed-text", {
  strings: [
    "Final Year CSE Student",
    "Aspiring Data Scientist",
    "Python & AI Enthusiast",
    "Problem Solver | Developer"
  ],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true
});

// Contact Form Validation & Feedback
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Optional: basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);
    contactForm.reset();
  });
}
