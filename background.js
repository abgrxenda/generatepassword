browser.runtime.onInstalled.addListener(() => {
    browser.contextMenus.create({
      id: "generatePassword",
      title: browser.i18n.getMessage("menuName"),
      contexts: ["editable"],
    });
  });
  
  browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "generatePassword") {
      browser.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']
      }).catch(err => console.error('Failed to execute script:', err));
    }
  });
 
  
  // Optionally, listen for messages from content.js or options.js
  