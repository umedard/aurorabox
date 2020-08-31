"use strict";

function toggleBasket() {
  document.querySelector("#busket").addEventListener("click", function () {
    document.querySelector("#drop").classList.toggle("open");
  });
  document.addEventListener("click", function (_ref) {
    var target = _ref.target;

    if (!target.closest(".header-middle__busket")) {
      document.querySelector("#drop").classList.remove("open");
    }
  });
  document.querySelector("#drop").addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

window.addEventListener("load", toggleBasket);