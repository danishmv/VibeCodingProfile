document.addEventListener('DOMContentLoaded', function() {
  var projectsLink = document.querySelector('a[href="#projects"]');
  const aboutNavLink = document.querySelector('a[href="#about"]');
  if (projectsLink) {
    projectsLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'sample-projects.html';
    });
  }
  if (aboutNavLink) {
    aboutNavLink.addEventListener('click', function(e) {
      e.preventDefault();
      const aboutTitle = document.getElementById('about-title');
      if (aboutTitle) {
        aboutTitle.style.display = 'block';
        aboutTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
});
