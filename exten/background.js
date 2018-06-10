chrome.browserAction.onClicked.addListener(function (activeTab) {
  const newURL = 'http://www.google.com/'
  chrome.tabs.create({ url: newURL })
});
