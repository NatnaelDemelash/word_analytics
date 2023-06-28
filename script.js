const textareaEl = document.querySelector(".textarea");
const characterEl = document.querySelector(".stat__number-characters");
const twitterEl = document.querySelector(".stat__number-twitter");
const facebookEl = document.querySelector(".stat__number-facebook");
const wordsEl = document.querySelector(".stat__number-words");

textareaEl.addEventListener("input", () => {
  // determine new number
  let noOfWords = textareaEl.value.split(" ").length;
  if (textareaEl.value.length === 0) {
    noOfWords = 0;
  }

  const noOfCharacters = textareaEl.value.length;
  const twitterCharsLeft = 280 - noOfCharacters;
  const facebookCharsLeft = 2200 - noOfCharacters;

  if (twitterCharsLeft < 0) {
    twitterEl.classList.add("stat__limit");
  } else {
    twitterEl.classList.remove("stat__limit");
  }

  if (facebookCharsLeft < 0) {
    facebookEl.classList.add("stat__limit");
  } else {
    facebookEl.classList.remove("stat__limit");
  }

  // set new numbers
  wordsEl.textContent = noOfWords;
  characterEl.textContent = noOfCharacters;
  twitterEl.textContent = twitterCharsLeft;
  facebookEl.textContent = facebookCharsLeft;
});
