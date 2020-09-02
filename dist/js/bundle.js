"use strict";

function toggleBasket() {
  document.querySelector("#busket").addEventListener("click", function () {
    document.querySelector("#orderList").classList.toggle("orderList__open");
  });
  document.addEventListener("click", function (_ref) {
    var target = _ref.target;

    if (!target.closest("#busket__wrapper")) {
      document.querySelector("#orderList").classList.remove("orderList__open");
    }
  });
  document.querySelector("#orderList").addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

window.addEventListener("load", toggleBasket);