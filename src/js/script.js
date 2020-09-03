function toggleBasket() {
  document.querySelector("#busket-trigger").addEventListener("click", () => {
    document.querySelector("#orderList").classList.toggle("orderList__open");
  });

  document.addEventListener("click", ({ target }) => {
    if (!target.closest("#busket__wrapper")) {
      document.querySelector("#orderList").classList.remove("orderList__open");
    }
  });

  document.querySelector("#orderList").addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

window.addEventListener("load", toggleBasket);
