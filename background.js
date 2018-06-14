'use strict';

chrome.runtime.onInstalled.addListener(function() {
  localStorage.setItem('size', 12)
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
