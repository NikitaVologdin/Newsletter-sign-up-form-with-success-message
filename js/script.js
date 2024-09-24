const body = document.getElementById("body");
const dialog = document.getElementById("dialog");
const submitButton = document.getElementById("submit");
const dismissButton = document.getElementById("dismiss");

document.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;
  console.log(target);
  if (target.id === "submit") {
    body.classList.toggle("modal-open");
    dialog.showModal();
  }

  if (target.id === "dismiss") {
    body.classList.toggle("modal-open");
    dialog.close();
  }
});
