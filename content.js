var el;

document.addEventListener("contextmenu", function(event){
  el = event.target;
}, true);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request == "deleteContextElement" && el !== undefined) {
    el.parentNode.removeChild(el);
  }
});
