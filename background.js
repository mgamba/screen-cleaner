chrome.contextMenus.create({
  title: "Delete Element", 
  contexts:["all"], 
  onclick: clean
});
function clean(info, tab) {
  chrome.tabs.sendMessage(tab.id, "deleteContextElement");
}
