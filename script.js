const content = document.querySelector(".content");
const sucessMsg = document.querySelector(".success-message");
const form = document.querySelector(".signup-form");
const dismissBtn = document.querySelector(".dismiss-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  content.style.display = "none";
  sucessMsg.style.display = "block";
});

dismissBtn.addEventListener("click", () => {
  content.style.display = "flex";
  sucessMsg.style.display = "none";
  form.reset();
});
