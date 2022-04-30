const sumbit = document.querySelector("#submit");

const ratingBox = document.querySelector("#ratingBox");

const thanksBox = document.querySelector("#thanks");

const ratingButton = document.querySelectorAll(".valuebutton");

const ratingScore = document.querySelector(".score");

let rating = 0;

clearSelected = () => {
  ratingButton.forEach((btn) => {
    btn.classList.remove("active");
    if (!btn.classList.contains("hover:bg-Orange")) {
      btn.classList.add("hover:bg-Orange");
    }
  });
};

ratingButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    clearSelected();
    btn.classList.add("active");
    btn.classList.remove("hover:bg-Orange");
    btn.style.transition = "0.3s";
    rating = btn.textContent;
  });
});

sumbit.addEventListener("click", () => {
  if (rating === 0) {
    window.alert("Select rating before moving forward");
  } else {
    ratingScore.textContent = rating;
    ratingBox.classList.add("hidden");
    thanksBox.classList.remove("hidden");
  }
});
