// This script helps handle Brotli-compressed files from GitHub Pages
function fixBrotliCompression() {
  // Store original fetch function
  const originalFetch = window.fetch;
  
  // Override fetch to add Content-Encoding header for .br files
  window.fetch = function(input, init) {
    if (input && typeof input === 'string' && input.endsWith('.br')) {
      init = init || {};
      init.headers = init.headers || {};
      
      // Add the Content-Encoding header for Brotli files
      if (init.headers instanceof Headers) {
        init.headers.append('Content-Encoding', 'br');
      } else {
        init.headers['Content-Encoding'] = 'br';
      }
    }
    return originalFetch(input, init);
  };
}

// Run the fix immediately
fixBrotliCompression();
