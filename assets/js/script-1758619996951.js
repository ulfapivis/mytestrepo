/* WordBuilder JS - Version 1.0.0 */
// JavaScript code for website

// WordBuilder JS - Default Content
// Generated JavaScript for website deployment

window.wordBuilderInteractive = {
  test: function() {
    console.log('WordBuilder site loaded!');
    return 'JavaScript working correctly';
  },
  init: function() {
    console.log('WordBuilder initialized');
    const headings = document.querySelectorAll('h3');
    headings.forEach(function(h3, index) {
      h3.style.cursor = 'pointer';
      h3.addEventListener('click', function() {
        console.log('Heading clicked - WordBuilder test!');
        this.style.color = '#2196F3';
      });
    });
    window.wordBuilderData = {
      timestamp: Date.now(),
      headingCount: headings.length
    };
  }
};

(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      window.wordBuilderInteractive.init();
      console.log('WordBuilder JS loaded successfully!');
    });
  } else {
    window.wordBuilderInteractive.init();
    console.log('WordBuilder JS loaded successfully!');
  }
})();

console.log('WordBuilder site ready');