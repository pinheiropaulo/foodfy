const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", () => {
    modalOverlay.classList.add("active");

    const imagem = card.querySelector("img").src;

    modalOverlay.querySelector("span").innerHTML = card.querySelector(
      "span"
    ).textContent;

    modalOverlay.querySelector("img").src = imagem;
  });
}

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});
