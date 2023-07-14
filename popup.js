
browser.runtime.onMessage.addListener((message) => {
    console.log("Received message from content script:", message);
  });

document.getElementById("start").onclick = ()=>{
    let body_data = [];
    body_data.push(document.getElementById("start_parser").value);
    body_data.push(document.getElementById("end_parser").value);
    body_data.push(document.getElementById("front").value);
    body_data.push(document.getElementById("back").value);
    body_data.push(document.getElementById("naming_type").checked);
    body_data.push(document.getElementById("last_name").value);
    body_data.push(document.getElementById("count_start").value);

    // Send a message from the popup page to the content script
    browser.tabs.query({active: true, currentWindow: true}).then((tabs) => {
    browser.tabs.sendMessage(tabs[0].id, { from: "POPUP_SCRIPT" , data:body_data.join("\r\n\r\n") } );
  });
};