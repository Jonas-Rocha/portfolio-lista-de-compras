const input = document.getElementById("addnewitem");
const form = document.querySelector("form");
const button = document.getElementById("addnewitem-button");
const checkboxdiv = document.querySelector(".checkbox-div");
const removeitens = document.querySelector(".remove-itens");

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
  clone.classList.add("clones");
  form.appendChild(clone);
  input.value = "";
  clone.children[2].addEventListener("click", () => {
    clone.remove();
    let showTimeout = setTimeout(() => {
      const trashicondelete =
        document.getElementsByClassName("trash-icon-delete")[0];
      const alertboxpopup =
        document.getElementsByClassName("alert-box-popup")[0];
      alertboxpopup.classList.add("alert-box-display");
      trashicondelete.textContent = "Item excluído!";
    }, 100);

    if (showTimeout) {
      setTimeout(() => {
        const alertboxpopup =
          document.getElementsByClassName("alert-box-popup")[0];
        alertboxpopup.classList.remove("alert-box-display");
      }, 1000);
    }
  });
});

removeitens.addEventListener("click", () => {
  let clones = document.querySelectorAll(".clones");
  for (let i = 0; i < clones.length; i++) {
    clones[i].remove();
  }
  let showTimeout = setTimeout(() => {
    const alertboxpopup = document.getElementsByClassName("alert-box-popup")[0];
    alertboxpopup.classList.add("alert-box-display");
  }, 100);

  if (showTimeout) {
    setTimeout(() => {
      const alertboxpopup =
        document.getElementsByClassName("alert-box-popup")[0];
      alertboxpopup.classList.remove("alert-box-display");
    }, 1000);
  }
});
