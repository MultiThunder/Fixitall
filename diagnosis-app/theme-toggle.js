// FixItAll — Dark Mode Toggle
// Toggle function - centralize the toggleTheme function
window.toggleTheme = function() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  if (isDark) {
    html.removeAttribute('data-theme');
    localStorage.setItem('fixitall-theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('fixitall-theme', 'dark');
  }
};

// Global theme initialization for diagnosis pages
function initializeThemeToggle() {
  // Apply saved theme on page load
  const savedTheme = localStorage.getItem('fixitall-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  
  // Add event listener to theme toggle buttons
  const themeToggles = document.querySelectorAll('.theme-toggle');
  themeToggles.forEach(function(button) {
    button.addEventListener('click', function() {
      window.toggleTheme();
    });
  });
}

// Apply saved theme on page load
(function() {
  const savedTheme = localStorage.getItem('fixitall-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

// Attach click listeners when DOM is ready
document.addEventListener('DOMContentLoaded', initializeThemeToggle);