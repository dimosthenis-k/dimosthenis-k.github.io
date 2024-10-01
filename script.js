document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Toggle the navigation menu on mobile screens
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  console.log("hamburger clicked");
  navLinks.classList.toggle("show");
});

// Typing and Deleting Text Animation
const textArray = [
  "Software Engineer",
  "Documentation Delver",
  "Web Developer",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150; // Speed of typing
const deletingSpeed = 75; // Speed of deleting
const pauseBetween = 1200; // Pause before deleting and before starting new word
const dynamicText = document.getElementById("dynamic-text");

function type() {
  const currentText = textArray[textIndex];

  if (!isDeleting && charIndex < currentText.length) {
    // Typing letters
    dynamicText.innerHTML =
      currentText.substring(0, charIndex + 1) + '<span class="cursor"></span>';
    charIndex++;
    setTimeout(type, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    // Deleting letters
    dynamicText.innerHTML =
      currentText.substring(0, charIndex - 1) + '<span class="cursor"></span>';
    charIndex--;
    setTimeout(type, deletingSpeed);
  } else if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, pauseBetween);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length; // Loop Array Elements
    setTimeout(type, typingSpeed);
  }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () =>
  setTimeout(type, typingSpeed)
);
