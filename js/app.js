const ratingForm = document.querySelector(".rating__form");
const ratinfinputs = document.querySelectorAll("input[name='rating']");
const errorMessage = document.querySelector(".error-message");
const errorMessageCloseBtn = document.querySelector(
  ".error-message__close-btn",
);
const ratingRormInputsContainer = document.querySelector(
  ".rating__form--inputs",
);
const componentRatingSection = document.querySelector(".component__rating");

let userRating = null;
ratingRormInputsContainer.addEventListener("click", (event) => {
  if (event.target.name === "rating") {
    userRating = event.target.value;
    console.log(userRating);
  }
});

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(userRating);
  if (userRating === null) {
    errorMessage.classList.remove("hide");
  } else {
    errorMessage.classList.add("hide");
    componentRatingSection.classList.add("hide");
  }
});

errorMessageCloseBtn.addEventListener("click", (event) => {
  errorMessage.classList.add("hide");
});
