document.addEventListener("click", (e) => {
  const target = e.target;
  if (target) {
    if (target instanceof HTMLTableElement) {
      chrome.storage.local.set({ key: target.innerText }).then(() => {
        console.log(target.innerText);
      });
    }
  }
});
