const fs = require('fs');

const techContent = fs.readFileSync('C:\\Users\\Kushal\\OneDrive\\Documents\\Fixitall\\diagnosis-app\\tech\\index.html', 'utf8');

const techNewContent = techContent
  // Replace the symptom-grid section
  .replace(
    /<div class="symptom-grid">[\s\S]*?<\/div>\s*<div class="view-all-wrap">/,
    `<div class="symptom-grid">
    <a href="laptop.html" class="symptom-card">
      <div class="icon">💻</div>
      <h3>Laptop</h3>
      <p>Slow, overheating, won't boot</p>
    </a>
    <a href="phone.html" class="symptom-card">
      <div class="icon">📱</div>
      <h3>Phone</h3>
      <p>Battery drain, slow, cracked screen</p>
    </a>
    <a href="wifi.html" class="symptom-card">
      <div class="icon">📶</div>
      <h3>WiFi</h3>
      <p>No internet, slow speed, drops</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">🖥️</div>
      <h3>Desktop</h3>
      <p>BSOD, slow, overheating</p>
    </a>
    <!-- Additional tech problems -->
    <a href="#" class="symptom-card hidden">
      <div class="icon">🖱️</div>
      <h3>Mouse</h3>
      <p>Lag, not working, double click</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">⌨️</div>
      <h3>Keyboard</h3>
      <p>Keys stuck, not typing, lag</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">🖨️</div>
      <h3>Printer</h3>
      <p>Not printing, paper jam, offline</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">🎧</div>
      <h3>Headphones</h3>
      <p>No sound, static, mic issues</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">📺</div>
      <h3>Monitor</h3>
      <p>Flickering, no signal, dead pixels</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">💾</div>
      <h3>Hard Drive</h3>
      <p>Clicking, not detected, slow</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">🔌</div>
      <h3>Charging Issues</h3>
      <p>Not charging, slow charge, port</p>
    </a>
    <a href="#" class="symptom-card hidden">
      <div class="icon">🎮</div>
      <h3>Gaming Console</h3>
      <p>Overheating, disc read, errors</p>
    </a>
  </div>

  <div class="view-all-wrap">
    <button class="btn-outline" id="showAllBtn">Show All Devices</button>
  </div>`
  )
  // Add the JavaScript for show/hide toggle
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
    
    if (lowerQuery.includes('laptop') || lowerQuery.includes('notebook') || lowerQuery.includes('macbook')) {
      window.location.href = \`tech/laptop.html?q=\${encodeURIComponent(searchQuery)}\`;
    } else if (lowerQuery.includes('phone') || lowerQuery.includes('mobile') || lowerQuery.includes('iphone') || lowerQuery.includes('android')) {
      window.location.href = \`tech/phone.html?q=\${encodeURIComponent(searchQuery)}\`;
    } else if (lowerQuery.includes('wifi') || lowerQuery.includes('wireless') || lowerQuery.includes('internet') || lowerQuery.includes('network')) {
      window.location.href = \`tech/wifi.html?q=\${encodeURIComponent(searchQuery)}\`;
    } else if (lowerQuery.includes('desktop') || lowerQuery.includes('pc') || lowerQuery.includes('computer')) {
      window.location.href = \`tech/?q=\${encodeURIComponent(searchQuery)}\`;
    } else {
      window.location.href = \`tech/?q=\${encodeURIComponent(searchQuery)}\`;
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
        showAllBtn.textContent = isExpanded ? 'Show Less' : 'Show All Devices';
      });
    }
  });
</script>
</body>`
  );

fs.writeFileSync('C:\\Users\\Kushal\\OneDrive\\Documents\\Fixitall\\diagnosis-app\\tech\\index.html', techNewContent, 'utf8');
console.log('Updated tech/index.html');