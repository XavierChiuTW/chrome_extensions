var getSelectedTab = (tab) => {
  var tabId = tab.id;
  var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);
  document.getElementById('show').addEventListener('click', () => sendMessage({ action: 'SHOW' }));
  document.getElementById('hide').addEventListener('click', () => sendMessage({ action: 'HIDE' }));
}
chrome.tabs.getSelected(null, getSelectedTab);