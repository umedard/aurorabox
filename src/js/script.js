function toggleBasket() {
  document.querySelector("#busket").addEventListener("click", () => {
    document.querySelector("#drop").classList.toggle("open");
  });

  document.addEventListener("click", ({ target }) => {
    if (!target.closest(".busket__wrapper")) {
      document.querySelector("#drop").classList.remove("open");
    }
  });

  document.querySelector("#drop").addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

window.addEventListener("load", toggleBasket);
