const button_add = document.getElementById("button_add_ingredient");
const box = document.getElementById("box");

button_add.addEventListener("click", () => {
  createDiv();
  createInput();
});

const createDiv = () => {
  let elemento = document.createElement("div");
  elemento.classList.add("form_item_input");
  box.appendChild(elemento);
};

const createInput = () => {
  let elemento = document.createElement("input");
  elemento.setAttribute("id", "input_ingredients");
  elemento.setAttribute("type", "text");
  elemento.setAttribute("name", "ingredients");
  elemento.setAttribute("placeholder", "Nome do Ingrediente");
  elemento.setAttribute("value", "");

  box.appendChild(elemento);
};

const formDelete = document.querySelector("#form_delete");

formDelete.addEventListener("submit", (event) => {
  const confirmation = confirm("Deseja Deletar ??");
  if (!confirmation) {
    event.preventDefault();
  }
});
