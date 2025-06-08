document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projects.forEach(project => {
        const type = project.getAttribute('data-type');
        if (filter === 'all' || type === filter) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });
});
