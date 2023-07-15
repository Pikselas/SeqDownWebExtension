
var body_data = "";

document.addEventListener('click', () => {
    // Get the selected text
    var selection = window.getSelection();
    
    if (selection.toString().length > 0) {
      // Get the first range of the selection
      var range = selection.getRangeAt(0);
      // Create a new document fragment containing the selected content
      var fragment = range.cloneContents();
      var div = document.createElement('div');
      div.appendChild(fragment);
      body_data = div.innerHTML;
    }
  });

  browser.runtime.onMessage.addListener((message) => 
{

  if(message.from == "POPUP_SCRIPT")
  {
    let data = [document.title , message.data];
    browser.runtime.sendMessage({from: "CONTENT_SCRIPT" ,  data: data});
  }
  else
  {
    message.data.push(body_data);
    console.log(message.data);
    fetch('http://localhost:3456/get_contents', { "method": "POST", "body":  message.data.join("\r\n\r\n")}); 
  }
});
