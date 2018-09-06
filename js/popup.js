
var search = document.querySelector(".button-search");
var popup = document.querySelector(".form-search");
var datestart = popup.querySelector("[name=datestart]");
var datefinish = popup.querySelector("[name=datefinish]");
var adult = popup.querySelector("[name=amount-adult]");
var child = popup.querySelector("[name=amount-adult-child]");
var storage1 = localStorage.getItem("adult");
var storage2 = localStorage.getItem("child");

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

search.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-open");
  datestart.focus();
  if (storage1) {
    adult.value = storage1;
  }
  if (storage2) {
    child.value = storage2;
  }
});

search.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-open");
  popup.classList.toggle("modal-close");
});

popup.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!datestart.value || !datefinish.value || !adult.value || !child.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adult", "adult.value");
      localStorage.setItem("child", "child.value");
    }
  }
});

