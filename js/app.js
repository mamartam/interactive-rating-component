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
const componentThankYouStateSection = document.querySelector(
  ".component__thank-you-state",
);
const userChoice = document.querySelector(".user-choice");

let userRating = null;
ratingRormInputsContainer.addEventListener("click", (event) => {
  if (event.target.name === "rating") {
    userRating = event.target.value;
    let labelsArray = event.currentTarget.querySelectorAll(
      ".rating__form--label",
    );
    Array.from(labelsArray).forEach((element) => {
      element.classList.remove("selected");
    });
    let el = Array.from(labelsArray).find((element) => {
      if (element.dataset.id === event.target.id) {
        return element;
      }
    });
    el.classList.add("selected");
  }
});

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (userRating === null) {
    errorMessage.classList.remove("hide");
    setTimeout(() => {
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
