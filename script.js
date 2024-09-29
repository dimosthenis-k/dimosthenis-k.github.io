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

// Skill bar animation using event listeners
window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector("#skills");
  const skillBars = document.querySelectorAll(".progress");

  const sectionPosition = skillsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (sectionPosition < screenPosition) {
    skillBars.forEach((bar) => {
      if (bar.classList.contains("html")) {
        bar.style.width = "90%"; // Set the percentage based on your skill level
      } else if (bar.classList.contains("css")) {
        bar.style.width = "80%";
      } else if (bar.classList.contains("js")) {
        bar.style.width = "75%";
      }
    });
  }
});

// Typing and Deleting Text Animation
const textArray = [
  "Software Engineer",
  "Documentation Delver",
  "Web Developer",
  "Tech Enthusiast",
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150; // Speed of typing
const deletingSpeed = 75; // Speed of deleting
const pauseBetween = 1000; // Pause before deleting and before starting new word
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
