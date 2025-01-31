// General Functionality (Example: Smooth Scrolling)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Example: Alert for Reservation Button
  document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Thank you for choosing us! Redirecting to reservation page...');
  });
