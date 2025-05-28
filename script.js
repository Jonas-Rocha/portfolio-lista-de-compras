const input = document.getElementById("addnewitem");
const form = document.querySelector("form");
const button = document.getElementById("addnewitem-button");
const checkboxDiv = document.getElementsByClassName("checkbox-div")[0]; // Corrigido

let value = "";
input.addEventListener("input", () => {
  value = input.value;
});

button.addEventListener("click", (event) => {
  event.preventDefault();

  const clone = checkboxDiv.cloneNode(true);

  const label = clone.querySelector(".label");
  label.textContent = value;

  form.appendChild(clone);
});



