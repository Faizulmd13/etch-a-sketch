document.addEventListener("DOMContentLoaded", function () {
  const gridCount = document.querySelector("input[type='number']");
  const gridContainer = document.querySelector(".container");
  const formGridButton = document.querySelector("#form");
  const clearContainer = document.querySelector("#clear");
  const gridColorBtns = document.querySelectorAll(".grid-color");
  let currentButton;

  gridColorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentButton = btn.id;
    });
  });

  clearContainer.addEventListener("click", () => {
    gridContainer.innerHTML = "";
    gridCount.value = "";
    currentButton = "";
  });

  formGridButton.addEventListener("click", () => {
    const count = Number(gridCount.value);

    if (!count || count <= 0) {
      alert("Please enter a valid positive number.");
      return;
    }
    gridContainer.innerHTML = "";
    const widthStyle = window.getComputedStyle(gridContainer);
    const containerWidth = parseFloat(widthStyle.width);
    const cellSize = containerWidth / count;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const gridElement = document.createElement("div");
        gridElement.style.width = cellSize + "px";
        gridElement.style.height = cellSize + "px";

        gridElement.addEventListener("mouseover", () => {
          switch (currentButton) {
            case "grey":
              gridElement.style.backgroundColor = "#ccc";
              break;

            case "white":
              gridElement.style.backgroundColor = "#fff";
              break;

            case "rainbow":
              gridElement.style.backgroundColor = `hsl(${
                Math.random() * 360
              }, 100%, 50%)`;
              break;

            default:
              gridElement.style.backgroundColor = "#000";
              break;
          }
        });

        gridContainer.appendChild(gridElement);
      }
    }
  });
});
