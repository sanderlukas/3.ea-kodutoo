const sizeUpBtn = document.getElementById('sizeUp')
const sizeDownBtn = document.getElementById('sizeDown')

if (document.body.style.fontSize === '') {
    document.body.style.fontSize = '12px'
}

sizeUpBtn.onclick = function () {
    console.log("suurem")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            {code: 'document.body.style.fontSize = "' + parseInt(document.body.style.fontSize.substring(0, 2)) + 5 + 'px";'})
      })
}

sizeDownBtn.onclick = function () {
    console.log("väiksem")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            {code: 'document.body.style.fontSize = "' + parseInt(document.body.style.fontSize.substring(0, 2)) - 5 + 'px";'})
      })
}
