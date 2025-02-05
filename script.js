// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

//Features Background Animation
window.addEventListener('scroll', function () {
  const featureWrapper = document.getElementById('features-wrapper');
  const rect = featureWrapper.getBoundingClientRect();

  // Check if the feature section is in the viewport
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      featureWrapper.classList.add('active');
  } else {
      featureWrapper.classList.remove('active');
  }
});

// Activities Animation
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.feature');
  sections.forEach((section, index) => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight / 2) {
      section.style.opacity = 1;
    } else {
      section.style.opacity = 0.5;
    }
  });
});

//Modal JS Code
// Open Modal
document.getElementById("viewPolicyBtn").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("policyModal").style.display = "flex";
});

// Close Modal
document.querySelector(".close-btn").addEventListener("click", function() {
  document.getElementById("policyModal").style.display = "none";
});

// Close Modal on Click Outside
window.addEventListener("click", function(event) {
  const modal = document.getElementById("policyModal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
});

//form
document.getElementById("sendEmailBtn").addEventListener("click", function () {
  // Get values from the form fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validate inputs
  if (name === "" || email === "" || message === "") {
      document.getElementById("formStatus").textContent = "Please fill out all fields.";
      document.getElementById("formStatus").style.color = "red";
      return;
  }

  // Encode the body text to handle spaces and special characters
  const mailBody = `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`;
  const mailtoLink = `mailto:asn.sreenath@gmail.com?subject=Being Amma, Inquiry from ${name}&body=${encodeURIComponent(mailBody)}`;

  // Open the mail client with the pre-filled information
  window.location.href = mailtoLink;

  // Show success message (optional)
  document.getElementById("formStatus").textContent = "Your message has been sent. Please check your email client.";
  document.getElementById("formStatus").style.color = "green";
});
