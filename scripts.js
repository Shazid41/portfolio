// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Adding Hover Effects on Skills, Project, and Review Cards
  document.querySelectorAll('.card, .project-card, .review-card').forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.1)';
    });
  
    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
    });
  });
  