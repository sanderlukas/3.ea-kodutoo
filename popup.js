const sizeUpBtn = document.getElementById('sizeUp')
const sizeDownBtn = document.getElementById('sizeDown')

sizeUpBtn.onclick = function () {
    console.log("suurem")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            {code: 'document.body.style.fontSize = "' + parseInt(document.body.style.fontSize.substring(0, 2)) + 5 + 'px";'})
      })
}

sizeDownBtn.onclick = function () {
    console.log("suurem")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            {code: 'document.body.style.fontSize = "' + parseInt(document.body.style.fontSize.substring(0, 2)) - 5 + 'px";'})
      })
}