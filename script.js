document.addEventListener("DOMContentLoaded", () => {
  // Update footer year dynamically
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#order') return;
      
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
      navbar.style.padding = '1rem 5%';
    } else {
      navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.05)';
      navbar.style.padding = '1.5rem 5%';
    }
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });
  }

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // Order form handling
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(orderForm);
      const data = Object.fromEntries(formData);
      
      alert(`Thank you, ${data.name}! Your order for ${document.querySelector('#item option:checked').text} has been received. We'll call you at ${data.phone} to confirm.`);
      
      closeOrderModal();
      orderForm.reset();
    });
  }
});

// Modal functions (global scope for onclick attributes)
function openOrderModal(e) {
  if (e) e.preventDefault();
  const modal = document.getElementById('orderModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeOrderModal() {
  const modal = document.getElementById('orderModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function closeMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.classList.remove('active');
    mobileNav.classList.remove('active');
  }
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  const modal = document.getElementById('orderModal');
  if (e.target === modal) {
    closeOrderModal();
  }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileNav && mobileNav.classList.contains('active')) {
    if (!mobileNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      closeMobileMenu();
    }
  }
});
