let subscribePopup = document.querySelector(".subscribe-popup");
let removePopupBtn = document.querySelector(".remove-popup");

function showPopup() {
  subscribePopup.classList.add("show");
}

function hidePopup() {
  subscribePopup.classList.remove("show");
}

hidePopup();

setInterval(() => {
  showPopup();
  setTimeout(hidePopup, 120000);
}, 420000);

removePopupBtn.addEventListener('click', function () {
    hidePopup();
});
