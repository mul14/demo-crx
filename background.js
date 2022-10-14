function ok() {
  console.log(document)
  document.body.style.backgroundColor = 'red';
}

chrome.tabs.onActivated.addListener(async (activeInfo) => {

  const tabId = activeInfo.tabId;

  console.log('tabId', tabId)

  await chrome.scripting.executeScript(
    {
      target: {tabId: tabId, allFrames: true},
      func: ok,
    },
    (injectionResults) => {
      console.log('injectionResults', injectionResults)
    }
  );

})

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {

  console.log(tabId, changeInfo, tab)

})



