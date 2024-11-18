const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

let checkPalindrome = () => {
  const regex = /[\W_]/gi;
  let userInput = textInput.value.replace(regex, "").toLowerCase();
  console.log("Here1: ", userInput);
  let userInputReverse = userInput.split("").reverse().join("").toLowerCase();
  console.log("Here Reversed2: ", userInputReverse);
};
checkBtn.addEventListener("click", checkPalindrome);
