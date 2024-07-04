window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const links = navbar.querySelectorAll('a');
  const portfolioText = document.getElementById('portfolio-text');

  if (window.scrollY > 50) {
      navbar.classList.add('bg-gray-500', 'shadow-xl','shadow-black',);
      links.forEach(link => {
          link.classList.add('text-white-important');
      });
      portfolioText.classList.add('text-white-important');
  } else {
      navbar.classList.remove('bg-gray-500', 'shadow-xl','shadow-black');
      links.forEach(link => {
          link.classList.remove('text-white-important');
      });
      portfolioText.classList.remove('text-white-important');
  }
});


document.getElementById('viewMoreBtn').addEventListener('click', function () {
    const certificates = document.querySelectorAll('.certificate.hidden');
    certificates.forEach(certificate => certificate.classList.remove('hidden'));
    document.getElementById('viewMoreBtn').classList.add('hidden');
    document.getElementById('closeBtn').classList.remove('hidden');
  });
  
  document.getElementById('closeBtn').addEventListener('click', function () {
    const certificates = document.querySelectorAll('.certificate');
    certificates.forEach((certificate, index) => {
      if (index >= 3) {
        certificate.classList.add('hidden');
      }
    });
    document.getElementById('viewMoreBtn').classList.remove('hidden');
    document.getElementById('closeBtn').classList.add('hidden');
  });
  
  