const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // get random number between 0 - 3 (array objects span)
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[generateRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;

  // getting our hex
  console.log("The random hex:", hexColor);
});

function generateRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
