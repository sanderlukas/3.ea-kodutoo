'use strict'

const sizeUpBtn = document.getElementById('sizeUp')
const sizeDownBtn = document.getElementById('sizeDown')
let size = 12

sizeUpBtn.onclick = function () {
    console.log("suurem")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            {code: 'document.body.style.fontSize = "' + size + 'px"'})
      })
    size = size + 2
}

sizeDownBtn.onclick = function () {
    console.log("väiksem")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            {code: 'document.body.style.fontSize = "' + size + 'px"'})
      })
    if (size <= 8) {
      size = 8
    } else {
      size = size - 2
    }
}
