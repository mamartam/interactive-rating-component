const ratingForm = document.querySelector(".rating__form");
const errorMessage = document.querySelector(".error-message");
const errorMessageCloseBtn = document.querySelector(
  ".error-message__close-btn",
);
const ratingRormInputsContainer = document.querySelector(
  ".rating__form--inputs",
);
const componentRatingSection = document.querySelector(".component__rating");
const componentThankYouStateSection = document.querySelector(
  ".component__thank-you-state",
);
const userChoice = document.querySelector(".user-choice");
// -----------------------------------------------------------------
let userRating = null;
let errorTimer;

ratingRormInputsContainer.addEventListener("change", (event) => {
  if (event.target.name === "rating") {
    userRating = event.target.value;
  }
});

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (userRating === null) {
    errorMessage.classList.remove("hide");
    clearTimeout(errorTimer);
    errorTimer = setTimeout(() => {
      errorMessage.classList.add("hide");
    }, 3000);
  } else {
    userChoice.textContent = userRating;
    errorMessage.classList.add("hide");
    componentRatingSection.classList.add("hide");
    componentThankYouStateSection.classList.remove("hide");
  }
});

errorMessageCloseBtn.addEventListener("click", () => {
  errorMessage.classList.add("hide");
});
