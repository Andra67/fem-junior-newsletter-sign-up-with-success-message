const content = document.querySelector(".content");
const successMsg = document.querySelector(".success-message");
const form = document.querySelector(".signup-form");
const dismissBtn = document.querySelector(".dismiss-btn");
const userEmail = document.getElementById("user-email");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput.value)) {
    userEmail.textContent = emailInput.value;
    content.style.display = "none";
    successMsg.style.display = "block";
    emailInput.classList.remove("email-error");
  } else {
    emailInput.classList.add("email-error");
  }
});

dismissBtn.addEventListener("click", () => {
  content.style.display = "flex";
  successMsg.style.display = "none";
  form.reset();
});
