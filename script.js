const header = document.querySelector("header");
const container = document.querySelector(".container");
const footer = document.querySelector("footer");

for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement("div");
  container.appendChild(div);
}
