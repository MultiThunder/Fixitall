// FixItAll — Common Scripts

// Simple search functionality for homepage
document.addEventListener('DOMContentLoaded', function() {
  // Simple search functionality for homepage
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
    
    // Simple category-based search
    if (lowerQuery.includes('health') || lowerQuery.includes('medical') || lowerQuery.includes('sick') || 
        lowerQuery.includes('pain') || lowerQuery.includes('fever') || lowerQuery.includes('headache') ||
        lowerQuery.includes('stomach') || lowerQuery.includes('cold') || lowerQuery.includes('flu') ||
        lowerQuery.includes('cough') || lowerQuery.includes('sore throat') || lowerQuery.includes('congestion')) {
      window.location.href = `/diagnosis-app/health/?q=${encodeURIComponent(searchQuery)}`;
    } else if (lowerQuery.includes('car') || lowerQuery.includes('automobile') || lowerQuery.includes('vehicle') ||
               lowerQuery.includes('engine') || lowerQuery.includes('brake') || lowerQuery.includes('tire') ||
               lowerQuery.includes('transmission') || lowerQuery.includes('overheating') ||
               lowerQuery.includes('wont start') || lowerQuery.includes("won't start") ||
               lowerQuery.includes('battery')) {
      window.location.href = `/diagnosis-app/car/?q=${encodeURIComponent(searchQuery)}`;
    } else if (lowerQuery.includes('home') || lowerQuery.includes('house') ||
               lowerQuery.includes('tap') || lowerQuery.includes('leak') ||
               lowerQuery.includes('ac') || lowerQuery.includes('cooling') ||
               lowerQuery.includes('washing') || lowerQuery.includes('plumbing') ||
               lowerQuery.includes('hvac') || lowerQuery.includes('heating')) {
      window.location.href = `/diagnosis-app/home/?q=${encodeURIComponent(searchQuery)}`;
    } else if (lowerQuery.includes('tech') || lowerQuery.includes('electronic') ||
               lowerQuery.includes('laptop') || lowerQuery.includes('phone') ||
               lowerQuery.includes('wifi') || lowerQuery.includes('computer') ||
               lowerQuery.includes('software') || lowerQuery.includes('network')) {
      window.location.href = `/diagnosis-app/tech/?q=${encodeURIComponent(searchQuery)}`;
    } else {
      // If still no good match, redirect to categories with the search query
      window.location.href = `/diagnosis-app/categories.html?q=${encodeURIComponent(searchQuery)}`;
    }
  }
  
  // Add event listener to the search input for Enter key
  const heroSearchInput = document.getElementById('heroSearchInput');
  if (heroSearchInput) {
    heroSearchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        performHeroSearch();
      }
    });
  }

  // Toggle blog articles visibility
  const toggleBtn = document.querySelector('.toggle-blog-articles');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      const blogGrid = this.closest('.section').querySelector('.blog-grid');
      const isExpanded = blogGrid.classList.contains('expanded');
      
      if (isExpanded) {
        blogGrid.classList.remove('expanded');
        this.textContent = 'Show All Articles';
        const revealedArticles = blogGrid.querySelectorAll('.revealed');
        revealedArticles.forEach(article => {
          article.classList.remove('revealed');
          article.classList.add('hidden-article');
          article.style.removeProperty('--reveal-index');
        });
      } else {
        blogGrid.classList.add('expanded');
        this.textContent = 'Hide Articles';
        
        const hiddenArticles = blogGrid.querySelectorAll('.hidden-article');
        hiddenArticles.forEach((article, index) => {
          article.style.setProperty('--reveal-index', index);
          article.style.animation = 'none';
          article.offsetHeight;
          article.style.animation = 'articleReveal 0.5s ease';
          article.style.animationDelay = `calc(var(--reveal-index, 0) * 0.08s)`;
          
          const handleAnimationEnd = () => {
            article.classList.remove('hidden-article');
            article.classList.add('revealed');
            article.style.animation = '';
            article.style.animationDelay = '';
            article.removeEventListener('animationend', handleAnimationEnd);
          };
          
          article.addEventListener('animationend', handleAnimationEnd);
        });
      }
    });
  }
});