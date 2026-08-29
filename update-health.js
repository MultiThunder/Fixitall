const fs = require('fs');

// Health category - 8 items currently, show first 4, hide 4, add 4 more = 12 total
const healthContent = fs.readFileSync('C:\\Users\\Kushal\\OneDrive\\Documents\\Fixitall\\diagnosis-app\\health\\index.html', 'utf8');

const healthNewContent = healthContent
  // Replace the symptom-grid section
  .replace(
    /<div class="symptom-grid">[\s\S]*?<\/div>\s*<div class="view-all-wrap">/,
    `<div class="symptom-grid">
    <a href="fever.html" class="symptom-card">
      <div class="icon">🌡️</div>
      <h3>Fever</h3>
      <p>High temperature, chills</p>
    </a>
    <a href="headache.html" class="symptom-card">
      <div class="icon">🤒</div>
      <h3>Headache</h3>
      <p>Migraine, tension, sinus</p>
    </a>
    <a href="stomach-pain.html" class="symptom-card">
      <div class="icon">🤢</div>
      <h3>Stomach Pain</h3>
      <p>Cramps, nausea, digestion</p>
    </a>
    <a href="knee-pain.html" class="symptom-card">
      <div class="icon">💊</div>
      <h3>Knee Pain</h3>
      <p>Joint pain, swelling</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">😭</div>
      <h3>Cough</h3>
      <p>Dry cough, wet cough</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">💪</div>
      <h3>Back Pain</h3>
      <p>Lower back, upper back</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">🤒</div>
      <h3>Vomiting</h3>
      <p>Nausea, food poisoning</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">💓</div>
      <h3>Chest Pain</h3>
      <p>Heartburn, tightness</p>
    </a>
    <!-- Additional health problems -->
    <a href="#" class="symptom-card hidden">
      <div class="icon">🤧</div>
      <h3>Allergies</h3>
      <p>Sneezing, itchy eyes, rash</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">😵</div>
      <h3>Dizziness</h3>
      <p>Vertigo, lightheadedness</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">😴</div>
      <h3>Fatigue</h3>
      <p>Chronic tiredness, low energy</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">🤕</div>
      <h3>Sore Throat</h3>
      <p>Pain, difficulty swallowing</p>
    </a>
  </div>

  <div class="view-all-wrap">
    <button class="btn-outline" id="showAllBtn">Show All Symptoms</button>
  </div>`
  )
  // Add the JavaScript for show/hide toggle
  .replace(
    /<script>\s*function performHeroSearch\(query\) \{[\s\S]*?document\.addEventListener\('DOMContentLoaded', function\(\) \{[\s\S]*?\}\);\s*\}\);\s*<\/script>/,
    `<script>
  function performHeroSearch(query) {
    let searchQuery = query;
    
    if (!searchQuery) {
      searchQuery = document.getElementById('heroSearchInput') ? 
        document.getElementById('heroSearchInput').value : null;
    }
    
    if (!searchQuery) {
      return;
    }
    
    searchQuery = searchQuery.trim();
    const lowerQuery = searchQuery.toLowerCase();
    
    if (lowerQuery.includes('fever') || lowerQuery.includes('cold') || 
        lowerQuery.includes('flu') || lowerQuery.includes('sore throat') ||
        lowerQuery.includes('influenza') || lowerQuery.includes('temperature') ||
        lowerQuery.includes('chills')) {
      window.location.href = \`health/fever.html?q=\${encodeURIComponent(searchQuery)}\`;
    } else if (lowerQuery.includes('headache') || lowerQuery.includes('migraine') ||
               lowerQuery.includes('tension') || lowerQuery.includes('sinus')) {
      window.location.href = \`health/headache.html?q=\${encodeURIComponent(searchQuery)}\`;
    } else if (lowerQuery.includes('stomach') || lowerQuery.includes('nausea') ||
               lowerQuery.includes('vomiting') || lowerQuery.includes('digestion') ||
               lowerQuery.includes('indigestion')) {
      window.location.href = \`health/stomach-pain.html?q=\${encodeURIComponent(searchQuery)}\`;
    } else if (lowerQuery.includes('knee') || lowerQuery.includes('joint') ||
               lowerQuery.includes('arthritis') || lowerQuery.includes('pain')) {
      window.location.href = \`health/knee-pain.html?q=\${encodeURIComponent(searchQuery)}\`;
    } else {
      window.location.href = \`health/?q=\${encodeURIComponent(searchQuery)}\`;
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const heroSearchInput = document.getElementById('heroSearchInput');
    if (heroSearchInput) {
      heroSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          performHeroSearch();
        }
      });
    }

    // Show all problems toggle
    const showAllBtn = document.getElementById('showAllBtn');
    const hiddenCards = document.querySelectorAll('.symptom-grid .symptom-card.hidden');
    let isExpanded = false;
    
    if (showAllBtn && hiddenCards.length > 0) {
      showAllBtn.addEventListener('click', function() {
        isExpanded = !isExpanded;
        hiddenCards.forEach((card, index) => {
          if (isExpanded) {
            card.style.display = 'block';
            card.style.animation = \`fadeInUp 0.3s ease \${index * 0.05}s forwards\`;
            card.style.opacity = '0';
          } else {
            card.style.animation = 'fadeOut 0.2s ease forwards';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
        showAllBtn.textContent = isExpanded ? 'Show Less' : 'Show All Symptoms';
      });
    }
  });
</script>`
  );

fs.writeFileSync('C:\\Users\\Kushal\\OneDrive\\Documents\\Fixitall\\diagnosis-app\\health\\index.html', healthNewContent, 'utf8');
console.log('Updated health/index.html');