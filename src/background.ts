let active = false;

function makeOrange(color: string): void {
  document.body.style.backgroundColor = color;
}

console.log("This is Background");

chrome.action.onClicked.addListener((tab) => {
  active = !active;
  console.log(active);
  const color = active ? "orange" : "white";
  chrome.scripting
    .executeScript({
      target: { tabId: tab.id ? tab.id : -1 },
      func: makeOrange,
      args: [color],
    })
    .then();
});
