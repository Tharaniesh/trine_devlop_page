
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  function setTheme(mode) {
    if (mode === 'dark') {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    }
  }

  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(userPrefersDark ? 'dark' : 'light');

  themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  });
});
