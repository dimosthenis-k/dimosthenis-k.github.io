document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skill bar animation using event listeners
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('#skills');
    const skillBars = document.querySelectorAll('.progress');

    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
        skillBars.forEach(bar => {
            if (bar.classList.contains('html')) {
                bar.style.width = '90%'; // Set the percentage based on your skill level
            } else if (bar.classList.contains('css')) {
                bar.style.width = '80%';
            } else if (bar.classList.contains('js')) {
                bar.style.width = '75%';
            }
        });
    }
});
