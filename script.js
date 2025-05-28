const input = document.getElementById("addnewitem");
const form = document.querySelector("form");
const button = document.getElementById("addnewitem-button");
const checkboxdiv = document.querySelector(".checkbox-div");

let value = "";
input.addEventListener("input", () => {
  value = input.value;
});

button.addEventListener("click", (event) => {
  event.preventDefault();

  const clone = checkboxdiv.cloneNode(true);

  const label = clone.querySelector(".label");
  label.textContent = value;

  form.appendChild(clone);
});
