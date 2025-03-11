const btnElement = document.querySelector("button");
const spanElement = document.querySelector("span");

btnElement.addEventListener("click", () => {
  const username = prompt("Please enter your name:");
  if (username) {
    spanElement.textContent = `${username}!`;
  }
});
