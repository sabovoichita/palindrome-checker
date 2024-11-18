const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

let checkPalindrome = () => {
  const regex = /[\W_]/gi;
  let userInput = textInput.value.replace(regex, "").toLowerCase();
  let userInputReverse = userInput.split("").reverse().join("").toLowerCase();

  if (userInput === "") {
    alert("Please input a value");
    return null;
  }

  if (userInput === userInputReverse) {
    console.log("Are inputs equal?", userInput === userInputReverse);
  }

  console.log("Here1: ", userInput);
  console.log("Here Reversed2: ", userInputReverse);
};
checkBtn.addEventListener("click", checkPalindrome);
