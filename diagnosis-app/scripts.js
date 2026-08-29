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
      window.location.href = `health/?q=${encodeURIComponent(searchQuery)}`;
    } else if (lowerQuery.includes('car') || lowerQuery.includes('automobile') || lowerQuery.includes('vehicle') ||
               lowerQuery.includes('engine') || lowerQuery.includes('brake') || lowerQuery.includes('tire') ||
               lowerQuery.includes('transmission') || lowerQuery.includes('overheating') ||
               lowerQuery.includes('wont start') || lowerQuery.includes("won't start") ||
               lowerQuery.includes('battery')) {
      window.location.href = `car/?q=${encodeURIComponent(searchQuery)}`;
    } else if (lowerQuery.includes('home') || lowerQuery.includes('house') ||
               lowerQuery.includes('tap') || lowerQuery.includes('leak') ||
               lowerQuery.includes('ac') || lowerQuery.includes('cooling') ||
               lowerQuery.includes('washing') || lowerQuery.includes('plumbing') ||
               lowerQuery.includes('hvac') || lowerQuery.includes('heating')) {
      window.location.href = `home/?q=${encodeURIComponent(searchQuery)}`;
    } else if (lowerQuery.includes('tech') || lowerQuery.includes('electronic') ||
               lowerQuery.includes('laptop') || lowerQuery.includes('phone') ||
               lowerQuery.includes('wifi') || lowerQuery.includes('computer') ||
               lowerQuery.includes('software') || lowerQuery.includes('network')) {
      window.location.href = `tech/?q=${encodeURIComponent(searchQuery)}`;
    } else {
      // If still no good match, redirect to categories with the search query
      window.location.href = `categories.html?q=${encodeURIComponent(searchQuery)}`;
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
});