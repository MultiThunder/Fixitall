const fs = require('fs');

const carContent = fs.readFileSync('C:\\Users\\Kushal\\OneDrive\\Documents\\Fixitall\\diagnosis-app\\car\\index.html', 'utf8');

const carNewContent = carContent
  // Replace the problem-list section
  .replace(
    /<div class="problem-list">[\s\S]*?<\/div>\s*<div class="view-all-wrap">/,
    `<div class="problem-list">
      <a href="wont-start.html" class="problem-item">
        <div class="problem-item-icon" style="background:var(--auto-soft)">📡</div>
        <div class="problem-item-text">
          <h4>Engine won't start</h4>
          <p>Clicking, cranking, or dead battery</p>
        </div>
        <span class="problem-item-arrow">›</span>
      </a>
      <a href="overheating.html" class="problem-item">
        <div class="problem-item-icon" style="background:var(--auto-soft)">🌡️</div>
        <div class="problem-item-text">
          <h4>Overheating</h4>
          <p>High temp gauge, steam, coolant issues</p>
        </div>
        <span class="problem-item-arrow">›</span>
      </a>
      <a href="engine-noise.html" class="problem-item">
        <div class="problem-item-icon" style="background:var(--auto-soft)">🔢</div>
        <div class="problem-item-text">
          <h4>Strange Noises</h4>
          <p>Knocking, squealing, rattling sounds</p>
        </div>
        <span class="problem-item-arrow">›</span>
      </a>
      <a href="#" class="problem-item hidden">
        <div class="problem-item-icon" style="background:var(--auto-soft)">⛽</div>
        <div class="problem-item-text">
          <h4>Poor Mileage</h4>
          <p>High fuel consumption issues</p>
        </div>
        <span class="problem-item-arrow">›</span>
      </a>
      <a href="#" class="problem-item hidden">
        <div class="problem-item-icon" style="background:var(--auto-soft)">⚠️</div>
        <div class="problem-item-text">
          <h4>Warning Lights On</h4>
          <p>Check engine, oil pressure, ABS</p>
        </div>
        <span class="problem-item-arrow">›</span>
      </a>
      <a href="#" class="problem-item hidden">
        <div class="problem-item-icon" style="background:var(--auto-soft)">🔋</div>
        <div class="problem-item-text">
          <h4>Battery Issues</h4>
          <p>Dead, draining, not charging</p>
        </div>
        <span class="problem-item-arrow">›</span>
      </a>
      <a href="#" class="problem-item hidden">
        <div class="problem-item-icon" style="background:var(--auto-soft)">🛑</div>
        <div class="problem-item-text">
          <h4>Brake Problems</h4>
          <p>Squeaking, grinding, soft pedal</p>
        </div>
        <span class="problem-item-arrow">›</span>
      </a>
      <a href="#" class="problem-item hidden">
        <div class="problem-item-icon" style="background:var(--auto-soft)">⚙️</div>
        <div class="problem-item-text">
          <h4>Transmission Issues</h4>
          <p>Slipping, hard shifts, leaks</p>
        </div>
        <span class="problem-item-arrow">›</span>
      </a>
      <a href="#" class="problem-item hidden">
        <div class="problem-item-icon" style="background:var(--auto-soft)">🌬️</div>
        <div class="problem-item-text">
          <h4>AC Not Working</h4>
          <p>Not cooling, strange smells</p>
        </div>
        <span class="problem-item-arrow">›</span>
      </a>
    </div>

  <div class="view-all-wrap">
    <button class="btn-outline" id="showAllBtn">Show All Problems</button>
  </div>`
  )
  // Add the JavaScript for show/hide toggle
  .replace(
    /<script src="\/theme-toggle\.js\?v=3"><\/script>\s*<script>\s*function performHeroSearch\(query\) \{[\s\S]*?document\.addEventListener\('DOMContentLoaded', function\(\) \{[\s\S]*?\}\);\s*\}\);\s*<\/script>/,
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
    
    if (lowerQuery.includes('engine') && (lowerQuery.includes('noise') || lowerQuery.includes('sound') || lowerQuery.includes('knocking'))) {
      window.location.href = \`car/engine-noise.html?q=\${encodeURIComponent(searchQuery)}\`;
    } else if (lowerQuery.includes('start') || lowerQuery.includes('battery') || lowerQuery.includes('crank') || lowerQuery.includes('dead')) {
      window.location.href = \`car/wont-start.html?q=\${encodeURIComponent(searchQuery)}\`;
    } else if (lowerQuery.includes('overheat') || lowerQuery.includes('temperature') || lowerQuery.includes('steam') || lowerQuery.includes('coolant')) {
      window.location.href = \`car/overheating.html?q=\${encodeURIComponent(searchQuery)}\`;
    } else {
      window.location.href = \`car/?q=\${encodeURIComponent(searchQuery)}\`;
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
    const hiddenCards = document.querySelectorAll('.problem-list .problem-item.hidden');
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
</script>`
  );

fs.writeFileSync('C:\\Users\\Kushal\\OneDrive\\Documents\\Fixitall\\diagnosis-app\\car\\index.html', carNewContent, 'utf8');
console.log('Updated car/index.html');