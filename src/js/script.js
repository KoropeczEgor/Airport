"strict mode";

document.addEventListener("DOMContentLoaded", () => {
  const modalOpen = document.querySelector("#button__open");
  const modalClose = document.querySelector("#button__close");
  const myModal = document.querySelector("#myModal");
  const modalAuto = document.querySelector("#id01");
  const modalAutoOpen = document.querySelector("#louding");
  const modalAutoClose = document.querySelector("#close__auto");

  function addClassOpen(selector) {
    selector.classList.add("open");
  }

  function removeClass(selector) {
    selector.classList.remove("open");
  }

  modalOpen.addEventListener("click", () => addClassOpen(myModal));
  modalClose.addEventListener("click", () => removeClass(myModal));
  modalAutoOpen.addEventListener("click", () => addClassOpen(modalAuto));
  modalAutoClose.addEventListener("click", () => removeClass(modalAuto));
});
