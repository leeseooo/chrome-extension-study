const table = document.querySelector("table");

if (table) {
  const columns = table.querySelectorAll(".item_val");
  const sizeInfo = {};

  const tbody = table.querySelector("tbody");
  const sizes = [...tbody.querySelectorAll("tr")].filter((size) => !size.classList.length && !size.id);

  // 사이즈 저장
  [...sizes].forEach((size) => {
    const infoType = {};

    // 실측 측정방식 객체로 저장
    [...columns].forEach((column) => {
      infoType[column.innerText] = 0;
    });

    const values = [...size.children].filter((element) => element.nodeName === "TD");
    const MY = size.children[0].innerText;

    Object.keys(infoType).forEach((key, index) => {
      infoType[key] = values[index].innerText;
    });

    sizeInfo[MY] = infoType;
  });
  console.log(sizeInfo);

  table.style.border = "10px solid red";
}
