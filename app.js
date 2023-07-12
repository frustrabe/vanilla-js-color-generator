const colors = [
  "green",
  "red",
  "black",
  "rgba(120, 111, 196)",
  "rgba(133, 122, 200)",
  "#f15025",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  // get random number between 0 - 3 (array objects span)
  const randomNumber = generateRandomNumber();

  // getting our number
  console.log("The random number:", randomNumber);
  // getting our string value of the color
  console.log("The random number value:", color.textContent);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function generateRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
