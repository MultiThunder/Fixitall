// FixItAll — Diagnosis Page Functions

// Initialize diagnosis functionality
document.addEventListener('DOMContentLoaded', function() {
  initializeAdvancedSearch();
  initializeThemeToggle();
});

function initializeAdvancedSearch() {
  // Initialize advanced search functionality
  console.log('Advanced search initialized');
}

function initializeThemeToggle() {
  // Apply saved theme on page load
  const savedTheme = localStorage.getItem('fixitall-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

function toggleRadio(element) {
  // Toggle radio button selection
  const radio = element.querySelector('input[type="radio"]');
  if (radio) {
    radio.checked = true; // Set to true instead of toggling
  }
  
  // Update visual state
  // Remove active class from all siblings first
  const siblings = element.parentNode.querySelectorAll('.option-item');
  siblings.forEach(sibling => sibling.classList.remove('active'));
  // Add active class to clicked element
  element.classList.add('active');
}

function toggleCheck(element) {
  // Toggle checkbox selection
  const checkbox = element.querySelector('input[type="checkbox"]');
  if (checkbox) {
    checkbox.checked = !checkbox.checked;
  }
  
  // Update visual state
  if (checkbox.checked) {
    element.classList.add('selected');
  } else {
    element.classList.remove('selected');
  }
}

function prevStep(currentStep) {
  // Navigate to previous step
  if (currentStep > 1) {
    const prevStepId = 'step-' + (currentStep - 1);
    const currentStepId = 'step-' + currentStep;
    
    // Hide current step
    const currentElement = document.getElementById(currentStepId);
    if (currentElement) {
      currentElement.classList.remove('active');
    }
    
    // Show previous step
    const prevElement = document.getElementById(prevStepId);
    if (prevElement) {
      prevElement.classList.add('active');
    }
    
    // Update progress indicators
    updateProgressIndicators(currentStep - 1);
  }
}

function nextStep(currentStep) {
  // Navigate to next step
  const nextStepId = 'step-' + (currentStep + 1);
  const currentStepId = 'step-' + currentStep;
  
  // Hide current step
  const currentElement = document.getElementById(currentStepId);
  if (currentElement) {
    currentElement.classList.remove('active');
  }
  
  // Show next step
  const nextElement = document.getElementById(nextStepId);
  if (nextElement) {
    nextElement.classList.add('active');
  }
  
  // Update progress indicators
  updateProgressIndicators(currentStep + 1);
}

function showResult() {
  // Show final results and hide navigation
  // Dynamically find the last step number
  const maxSteps = document.querySelectorAll('.progress-circle').length;
  const resultElement = document.getElementById('step-' + maxSteps);
  if (resultElement) {
    resultElement.classList.add('active');
  }
  
  // Hide navigation buttons
  const navigationButtons = document.querySelectorAll('.card-actions');
  navigationButtons.forEach(button => {
    button.style.display = 'none';
  });
  
  // Show restart button
  const restartButton = document.createElement('a');
  restartButton.href = window.location.pathname;
  restartButton.className = 'btn-outline';
  restartButton.innerHTML = '↺ Start Over';
  restartButton.style.cssText = 'margin-top: 20px; display: inline-block;';
  
  const viewAllWrap = document.querySelector('.view-all-wrap');
  if (viewAllWrap) {
    viewAllWrap.appendChild(restartButton);
  }
}

function updateProgressIndicators(currentStep) {
  // Update progress indicator dots and lines - dynamically detect number of steps
  const maxSteps = document.querySelectorAll('.progress-circle').length;
  for (let i = 1; i <= maxSteps; i++) {
    const dot = document.getElementById('dot-' + i);
    const line = document.getElementById('line-' + i);
    
    if (dot && line) {
      if (i < currentStep) {
        dot.classList.add('completed');
        line.classList.add('completed');
        dot.classList.remove('active');
      } else if (i === currentStep) {
        dot.classList.add('active');
        line.classList.remove('completed');
        dot.classList.remove('completed');
      } else {
        dot.classList.remove('active', 'completed');
        line.classList.remove('completed');
      }
    }
  }
}

// Global toggleTheme function (centralized)
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