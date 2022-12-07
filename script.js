const DOMSelectors = {
  name: document.querySelector(".name"),
  url: document.querySelector(".url"),
  price: document.querySelector(".price"),
  submit: document.querySelector(`.submit`),
  form: document.querySelector(".form"),
  cardContainer: document.querySelector(".card-container"),
};

function createObject() {}

DOMSelectors.submit.addEventListener("click", function (event) {
  event.preventDefault();
  values = {
    name: DOMSelectors.name.value,
    url: DOMSelectors.url.value,
    price: DOMSelectors.price.value,
  };
  DOMSelectors.form.reset();
  function inject(holders) {
    return `<div class="card">
    <div class="card-content">
      <h1 class="card-name">${holders.name}</h1>
      <img
        class="img"
        src="${holders.url}"
      />
      <h3 class="price">${holders.price}</h3>
    </div>
  </div>`;
  }
  DOMSelectors.cardContainer.insertAdjacentElement("beforeend", inject(values));
  console.log(values);
});
