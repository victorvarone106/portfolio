const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = getSavedTheme();
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});

// Toggle light/dark mode
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    themeToggle.textContent = '☀️';
    saveTheme('light');
  } else {
    themeToggle.textContent = '🌙';
    saveTheme('dark');
  }
});

// Simple in-memory theme storage
let currentTheme = 'dark';
function saveTheme(theme) {
  currentTheme = theme;
}
function getSavedTheme() {
  return currentTheme;
}

// Generate and download CV as PDF from site content
document.getElementById('downloadCvBtn').addEventListener('click', () => {
  const cvElement = document.getElementById('cv-template');
  cvElement.style.display = 'block';

  const options = {
    margin: 0.5,
    filename: 'Victor-Varone-CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };

  html2pdf().set(options).from(cvElement).save().then(() => {
    cvElement.style.display = 'none';
  });
});