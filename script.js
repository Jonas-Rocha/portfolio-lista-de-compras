const input = document.getElementById("addnewitem");
const form = document.querySelector("form");
const button = document.getElementById("addnewitem-button");
const checkboxdiv = document.querySelector(".checkbox-div");

let value = "";
input.addEventListener("input", () => {
  value = input.value;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value.trim() === "") return;
  const clone = checkboxdiv.cloneNode(true);
  const label = clone.querySelector(".label");
  label.textContent = input.value;
  clone.id = `${input.value}`;
  // console.log(clone.children[2]);
  clone.style.display = "flex";
  form.appendChild(clone);
  input.value = "";
  console.log(clone.children);
  // clone.addEventListener("click", (event) => {
  //   console.log(event);
  // });
});



