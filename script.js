document.addEventListener("DOMContentLoaded", () => {
  // Update footer year dynamically
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for fixed navbar
          behavior: 'smooth'
        });
      }
    });
  });

  // Simple navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
      navbar.style.padding = '1rem 5%';
    } else {
      navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.05)';
      navbar.style.padding = '1.5rem 5%';
    }
    navbar.style.transition = 'all 0.3s ease';
  });
});
