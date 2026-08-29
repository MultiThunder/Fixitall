const fs = require('fs');

const homeContent = fs.readFileSync('C:\\Users\\Kushal\\OneDrive\\Documents\\Fixitall\\diagnosis-app\\home\\index.html', 'utf8');

const homeNewContent = homeContent
  // Replace the symptom-grid section
  .replace(
    /<div class="symptom-grid">[\s\S]*?<\/div>\s*<div class="view-all-wrap">/,
    `<div class="symptom-grid">
    <a href="leaking-tap.html" class="symptom-card">
      <div class="icon">💧</div>
      <h3>Leaking Tap</h3>
      <p>Dripping, running water</p>
    </a>
    <a href="ac-not-cooling.html" class="symptom-card">
      <div class="icon">❄️</div>
      <h3>A/C Not Cooling</h3>
      <p>Weak airflow, warm air</p>
    </a>
    <a href="washing-machine.html" class="symptom-card">
      <div class="icon">🧺</div>
      <h3>Washing Machine</h3>
      <p>Not spinning, leaking, noise</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">♨️</div>
      <h3>Water Heater</h3>
      <p>No hot water, strange noise</p>
    </a>
    <!-- Additional home problems -->
    <a href="#" class="symptom-card hidden">
      <div class="icon">🚿</div>
      <h3>Clogged Drain</h3>
      <p>Slow drainage, bad odor</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">💡</div>
      <h3>Electrical Outlet</h3>
      <p>Not working, sparking, loose</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">🚪</div>
      <h3>Door Issues</h3>
      <p>Sticking, squeaking, won't latch</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">🪟</div>
      <h3>Window Problems</h3>
      <p>Stuck, drafty, broken seal</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">🎨</div>
      <h3>Wall Damage</h3>
      <p>Cracks, holes, peeling paint</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">🏠</div>
      <h3>Roof Leak</h3>
      <p>Water stains, dripping ceiling</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">🧱</div>
      <h3>Foundation Cracks</h3>
      <p>Uneven floors, sticking doors</p>
    </a>
  </div>

  <div class="view-all-wrap">
    <button class="btn-outline" id="showAllBtn">Show All Problems</button>
  </div>`
  )
  // Add the JavaScript for show/hide toggle - need to add theme-toggle.js first then the script
  .replace(
    /<script src="\/theme-toggle\.js\?v=3"><\/script>\s*<\/body>/,
    `<script src="/theme-toggle.js?v=3"></script>
<script>
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
    
    if (lowerQuery.includes('leak') || lowerQuery.includes('drip') || lowerQuery.includes('tap') || lowerQuery.includes('faucet')) {
      window.location.href = \`home/leaking-tap.html?q=\${encodeURIComponent(searchQuery)}\`;
    } else if (lowerQuery.includes('ac') || lowerQuery.includes('air condition') || lowerQuery.includes('cooling') || lowerQuery.includes('airflow')) {
      window.location.href = \`home/ac-not-cooling.html?q=\${encodeURIComponent(searchQuery)}\`;
    } else if (lowerQuery.includes('wash') || lowerQuery.includes('laundry') || lowerQuery.includes('spin') || lowerQuery.includes('machine')) {
      window.location.href = \`home/washing-machine.html?q=\${encodeURIComponent(searchQuery)}\`;
    } else if (lowerQuery.includes('water heat') || lowerQuery.includes('hot water') || lowerQuery.includes('heater')) {
      window.location.href = \`home/?q=\${encodeURIComponent(searchQuery)}\`;
    } else {
      window.location.href = \`home/?q=\${encodeURIComponent(searchQuery)}\`;
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
        showAllBtn.textContent = isExpanded ? 'Show Less' : 'Show All Problems';
      });
    }
  });
</script>
</body>`
  );

fs.writeFileSync('C:\\Users\\Kushal\\OneDrive\\Documents\\Fixitall\\diagnosis-app\\home\\index.html', homeNewContent, 'utf8');
console.log('Updated home/index.html');