const DOMselectors = {
  button: document.querySelector(".btn"),
  name: document.querySelector("#name"),
  url: document.querySelector("#url"),
  price: document.querySelector("#price"),
  display: document.querySelector("#display"),
  form: document.querySelector("#form"),
};

DOMselectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  const item = {
    name: DOMselectors.name.value,
    price: DOMselectors.price.value,
    url: DOMselectors.url.value,
  };
  function creator(item) {
    DOMselectors.display.insertAdjacentHTML(
      "afterbegin",
      `<div class="display-card">
        <img class="display-img" src="${item.url}"/>
        <h2 class="display-name">${item.name}</h2>
        <h3 class="display-price">$${item.price}</h3>
        <button class="remove btn">Remove item</button>`
    );
  }
  creator(item);
  DOMselectors.form.reset();

  let remove_all = document.querySelectorAll(".remove");
  remove_all.forEach((remove) =>
    remove.addEventListener("click", function (e) {
      e.target.parentElement.remove();
    })
  );
});
