(() => {
  const refs = {
    openModalBtn: document.querySelector(".mob-menu-open-btn"),
    closeModalBtn: document.querySelector(".mob-menu-close-btn"),
    modal: document.querySelector(".mob-menu"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();
