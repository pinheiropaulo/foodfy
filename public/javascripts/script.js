const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", () => {
    const receitaID = card.getAttribute("id");
    window.location.href = `/detalhes?id=${receitaID}`;
  });
}

const getButton01 = document.querySelectorAll("#button_01");

for (let c of getButton01) {
  c.addEventListener("click", () => {
    const visibility = document.getElementById("visible_01");
    if (visibility.style.display === "none") {
      visibility.style.display = "block";
    } else {
      visibility.style.display = "none";
    }
  });
}

const getButton02 = document.querySelectorAll("#button_02");

for (let c of getButton02) {
  c.addEventListener("click", () => {
    const visibility = document.getElementById("visible_02");
    if (visibility.style.display === "none") {
      visibility.style.display = "block";
    } else {
      visibility.style.display = "none";
    }
  });
}

const getButton03 = document.querySelectorAll("#button_03");

for (let c of getButton03) {
  c.addEventListener("click", () => {
    const visibility = document.getElementById("visible_03");
    if (visibility.style.display === "none") {
      visibility.style.display = "block";
    } else {
      visibility.style.display = "none";
    }
  });
}
