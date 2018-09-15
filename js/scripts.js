
var search = document.querySelector(".button-search");
var popup = document.querySelector(".form-search");
var datestart = popup.querySelector("[name=datestart]");
var datefinish = popup.querySelector("[name=datefinish]");
var adult = popup.querySelector("[name=amount-adult]");
var child = popup.querySelector("[name=amount-adult-child]");
var storage1 = localStorage.getItem("adult");
var storage2 = localStorage.getItem("child");

popup.classList.add("modal-close");
search.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal-open")) {
    popup.classList.remove("modal-open");
    popup.classList.add("modal-close");
  } else {
  popup.classList.remove("modal-close");
  popup.classList.add("modal-open");
}
  datestart.focus();
  if (storage1) {
    adult.value = storage1;
  }
  if (storage2) {
    child.value = storage2;
  }
});

popup.addEventListener("submit", function (evt) {
  if (!datestart.value || !datefinish.value || !adult.value || !child.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adult", "adult.value");
      localStorage.setItem("child", "child.value");
    }
  }
});

