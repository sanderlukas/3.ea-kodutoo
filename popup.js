'use strict'

const sizeUpBtn = document.getElementById('sizeUp')
const sizeDownBtn = document.getElementById('sizeDown')
let size

sizeUpBtn.onclick = function () {
    size = localStorage.getItem('size')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            {code: 'document.body.style.fontSize = "' + size + 'px"'})
      })
    size = parseInt(size) + 2
    localStorage.setItem('size', size)
}

sizeDownBtn.onclick = function () {
    size = localStorage.getItem('size')
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            {code: 'document.body.style.fontSize = "' + size + 'px"'})
      })
    size = parseInt(size) - 2
    if (size <= 10) {
      size = 10
    }
    localStorage.setItem('size', size)
}
