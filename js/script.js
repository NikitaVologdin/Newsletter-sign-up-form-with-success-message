const body = document.getElementById("body");
const dialog = document.getElementById("dialog");
const submitButton = document.getElementById("submit");
const dismissButton = document.getElementById("dismiss");
const form = document.getElementById("form");
const error = document.getElementById("error");
const emailInput = document.getElementById("email");
const userEmail = document.getElementById("user-email");

function showSuccess(data) {
  dialog.showModal();
  userEmail.innerText = data;
  dialog.classList.toggle("show");
  body.classList.toggle("modal-open");
}

function closeDialog() {
  body.classList.toggle("modal-open");
  dialog.classList.toggle("show");
  clearInput();
  const timeOutId = setTimeout(() => {
    dialog.close();
  }, 300);
}

function validateEmail(email) {
  const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const validated = regExp.test(email);
  return { validated, error: "Valid email required" };
}

function showError(message) {
  error.innerText = message;
  error.classList.add("show");
  error.classList.add("bounce");
  emailInput.classList.add("error");
}

function removeError() {
  error.classList.remove("show");
  error.classList.remove("bounce");
  emailInput.classList.remove("error");
}

function clearInput() {
  emailInput.value = "";
}

document.addEventListener("click", (e) => {
  const target = e.target;

  if (target.id === "dismiss") {
    closeDialog();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  for (let name in data) {
    let status;

    if (name === "email") {
      status = validateEmail(data[name]);
    }

    if (!status.validated) {
      return showError(status.error);
    }
    if (emailInput.classList.contains("error")) {
      removeError();
    }
    return showSuccess(data[name]);
  }
});
