const busket = document.querySelector("#busket");
const drop = document.querySelector("#drop");
busket.addEventListener("click", () => {
  drop.classList.toggle("open");
});
