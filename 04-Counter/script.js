const btnAddElement = document.getElementById("counterAdd");
const btnSubElement = document.getElementById("counterSub");
const counterDisplayElement = document.getElementById("counterDisplay");

let total = 0;

const limit = 20;

function updateCounter() {
  if (total > limit) {
    total = limit;
  }
  if (total <= 0) {
    total = 0;
    document.body.style.backgroundColor = "teal";
  } else {
    document.body.style.setProperty(
      "background-color",
      `rgb(${(total / limit) * 255}, 64, 0)`
    );
  }
  counterDisplayElement.textContent = total;
}

btnAddElement.addEventListener("click", () => {
  total += 1;
  updateCounter();
});

btnSubElement.addEventListener("click", () => {
  total -= 1;
  updateCounter();
});
