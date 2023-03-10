import { InfoType, SizeInfoType } from "./types";

const table = document.querySelector("table");

if (table) {
  const columns = table.querySelectorAll(".item_val") as NodeListOf<HTMLElement>;
  const sizeInfo: SizeInfoType = {};

  const tbody = table.querySelector("tbody");
  if (tbody) {
    const sizes = [...tbody.querySelectorAll("tr")].filter((size) => !size.classList.length && !size.id);

    // 사이즈 저장
    [...sizes].forEach((size) => {
      const infoType: InfoType = {};

      // 실측 측정방식 객체로 저장
      [...columns].forEach((column) => {
        infoType[column.innerText] = "";
      });

      const values = [...size.children].filter((element) => element.nodeName === "TD") as HTMLElement[];
      const th = size.children[0] as HTMLElement;
      const MY = th.innerText;

      Object.keys(infoType).forEach((key, index) => {
        infoType[key] = values[index].innerText;
      });

      sizeInfo[MY] = infoType;
    });
  }

  console.log(sizeInfo);

  table.style.border = "10px solid red";
}
