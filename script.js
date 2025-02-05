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

