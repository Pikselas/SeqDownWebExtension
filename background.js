browser.runtime.onMessage.addListener((message) => 
{
    if(message.from == "CONTENT_SCRIPT")
    {
        browser.tabs.query({active: true, currentWindow: true}).then((tabs) => 
        {
            browser.cookies.getAll({url : tabs[0].url}).then((cookies) => 
            {
                let cookieString = [];
                cookies.forEach((cookie) => 
                {
                    cookieString.push(cookie.name + "=" + cookie.value);
                });
                message.data.push(cookieString.join("; "));
                browser.tabs.sendMessage(tabs[0].id , {from:"BACKGROUND_SCRIPT" , data:message.data});
            });
        });
    }
});