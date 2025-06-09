// Pegando o input onde o usuário digita o novo item
const input = document.getElementById("addnewitem");

// Pegando o formulário inteiro
const form = document.querySelector("form");

// Pegando o botão de adicionar novo item
const button = document.getElementById("addnewitem-button");

// Pegando a estrutura do item que será clonada (com checkbox, texto e ícone de lixeira)
const checkboxdiv = document.querySelector(".checkbox-div");

// Pegando o botão que remove todos os itens
const removeitens = document.querySelector(".remove-itens");

// Variável para armazenar o texto digitado no input
let value = "";

// Sempre que o usuário digitar algo no input, atualiza o valor da variável "value"
input.addEventListener("input", () => {
  value = input.value;
});

// Quando o formulário for enviado (clicar no botão ou pressionar Enter)
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede que a página recarregue

  // Se o campo estiver vazio (após remover espaços), não faz nada
  if (input.value.trim() === "") return;

  // Clona o item modelo com checkbox e lixeira
  const clone = checkboxdiv.cloneNode(true);

  // Muda o texto da label (que vai mostrar o nome do item)
  const label = clone.querySelector(".label");
  label.textContent = input.value;

  // Dá um ID ao novo item igual ao texto digitado
  clone.id = `${input.value}`;

  // Garante que o item clonado apareça (caso o modelo esteja oculto)
  clone.style.display = "flex";

  // Adiciona uma classe para identificar que este item foi adicionado pelo usuário
  clone.classList.add("clones");

  // Adiciona o item clonado ao formulário (embaixo do input e do botão)
  form.appendChild(clone);

  // Limpa o campo de input
  input.value = "";

  // Adiciona um evento ao botão de lixeira do item clonado
  clone.children[2].addEventListener("click", () => {
    // Remove o item da tela
    clone.remove();

    // Aguarda 100ms e mostra o alerta de item excluído
    let showTimeout = setTimeout(() => {
      const trashicondelete =
        document.getElementsByClassName("trash-icon-delete")[0];
      const alertboxpopup =
        document.getElementsByClassName("alert-box-popup")[0];
      alertboxpopup.classList.add("alert-box-display");
      trashicondelete.textContent = "Item excluído!";
    }, 100);

    // Após mais 1 segundo, oculta o alerta
    if (showTimeout) {
      setTimeout(() => {
        const alertboxpopup =
          document.getElementsByClassName("alert-box-popup")[0];
        alertboxpopup.classList.remove("alert-box-display");
      }, 1000);
    }
  });
});

// Quando clicar no botão de "remover todos os itens"
removeitens.addEventListener("click", () => {
  // Seleciona todos os itens adicionados pelo usuário
  let clones = document.querySelectorAll(".clones");

  // Remove cada um dos itens
  for (let i = 0; i < clones.length; i++) {
    clones[i].remove();
  }

  // Após 100ms, mostra alerta dizendo que todos os itens foram excluídos
  setTimeout(() => {
    const trashicondelete =
      document.getElementsByClassName("trash-icon-delete")[0];
    const alertboxpopup = document.getElementsByClassName("alert-box-popup")[0];
    alertboxpopup.classList.add("alert-box-display");
    trashicondelete.textContent = "Todos os itens foram excluidos!";
  }, 100);

  // Após mais 1 segundo, esconde o alerta
  setTimeout(() => {
    const trashicondelete =
      document.getElementsByClassName("trash-icon-delete")[0];
    const alertboxpopup = document.getElementsByClassName("alert-box-popup")[0];
    alertboxpopup.classList.remove("alert-box-display");
    trashicondelete.textContent = "Todos os itens foram excluidos!";
  }, 1000);
});