const screen = document.querySelector(".screen");
smallGrid();

function smallGrid() {
  for (let i = 0; i < 16 * 16; i++) {
    let div = document.createElement("div");
    div.classList.add("grid", "smallGrid");
    screen.append(div);
    div.addEventListener("mouseover", function () {
      div.classList.add("gridActive");
    });
  }
}

function bigGrid() {
  for (let i = 0; i < 32 * 32; i++) {
    let div = document.createElement("div");
    div.classList.add("grid", "bigGrid");
    screen.append(div);
    div.addEventListener("mouseover", function () {
      div.classList.add("gridActive");
    });
  }
}

const bigButton = document.querySelector(".bigButton");
bigButton.addEventListener("click", function () {
  screen.textContent = "";
  bigGrid();
});

const smallButton = document.querySelector(".smallButton");
smallButton.addEventListener("click", function () {
  screen.textContent = "";
  smallGrid();
});
