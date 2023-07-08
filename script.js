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
      fetch("http://localhost:3456/test" , {"method":"POST" , "body" : div.innerHTML}).then((res)=>{
        console.log(res);
      });
    }
  });