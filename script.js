window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const links = navbar.querySelectorAll('a');
  const portfolioText = document.getElementById('portfolio-text');

  if (window.scrollY > 50) {
      navbar.classList.add('bg-gray-500', 'shadow-sm');
      links.forEach(link => {
          link.classList.add('text-white-important');
      });
      portfolioText.classList.add('text-white-important');
  } else {
      navbar.classList.remove('bg-gray-500', 'shadow-sm');
      links.forEach(link => {
          link.classList.remove('text-white-important');
      });
      portfolioText.classList.remove('text-white-important');
  }
});
