$(document).ready(function () {
  // modal 기능
  let modalWrap = $(".modal-wrap");
  let modalClose = "modal-close-active";
  let modalCloseBt = $(".modal-close");

  modalCloseBt.click(() => {
    modalWrap.addClass(modalClose);
  });
});
