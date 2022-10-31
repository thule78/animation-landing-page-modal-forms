const signupModal = document.querySelector(".signup-wrapper");
const loginModal = document.querySelector(".login-wrapper");
const signupBtn = document.querySelector(".signup");
const loginBtn = document.querySelector(".login");
const signupXBtn = document.querySelector(".signup-x");
const loginXBtn = document.querySelector(".login-x");
const formContainer = document.querySelector(".form-container");

signupBtn.addEventListener('click', () => {
    signupModal.classList.add("display");
    formContainer.classList.add("visible");
});

loginBtn.addEventListener("click", () => {
    loginModal.classList.add("display");
    formContainer.classList.add("visible");
});

signupXBtn.addEventListener("click", () => {
    signupModal.classList.remove("display");
    formContainer.classList.remove("visible");
});

loginXBtn.addEventListener("click", () => {
    loginModal.classList.remove("display");
    formContainer.classList.remove("visible");
});