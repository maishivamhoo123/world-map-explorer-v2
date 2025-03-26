document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // Initialize dark mode
    function initDarkMode() {
      if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.classList.replace('fa-moon', 'fa-sun');
        console.log('Dark mode initialized');
      }
    }
    
    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.classList.replace('fa-moon', 'fa-sun');
        console.log('Dark mode enabled');
      } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.classList.replace('fa-sun', 'fa-moon');
        console.log('Dark mode disabled');
      }
      
      // Refresh map if exists
      if (typeof map !== 'undefined') {
        setTimeout(() => {
          map.invalidateSize();
          map.eachLayer(layer => {
            if (layer._url) layer.redraw();
          });
        }, 100);
      }
    });
    
    initDarkMode();
  });