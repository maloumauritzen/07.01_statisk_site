const product_list_container = document.querySelector("#product_list_container2");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) =>
        `
      <section class="product_list_container">
        <article class="card">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
            alt="${data.productdisplayname}"
          />
          <h3>${data.productdisplayname}</h3>
          <p class="grey">Sweatshirts | Reebok</p>
          <p>DKK ${data.price},-</p>
          <div class="knap">
            <a href="produkt.html">Læs mere</a>
          </div>
        </article>
        `
    )
    .join("");

  console.log(markup);
  product_list_container.innerHTML = markup;
}