const container = document.querySelector(".container");
const column = document.querySelector(".column");
const row = document.querySelector(".row");

for (let i = 0; i < 5; i++) {
  const div = document.createElement("div");
  div.classList.add("smallGrid");
  column.appendChild(div);
}
