console.log("script hentet");

const category = "Apparel";
const listContainer = document.querySelector(".productList");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=10`)
  .then((response) => response.json())
  .then(showProductList);

function showProductList(data) {
  const markup = data
    .map(
      (product) =>
        `
      <section class="product_list_container">
         <article class="card">
           <img
             src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
             alt="${product.productdisplayname}"
           />
           <h3>${product.productdisplayname}</h3>
           <p class="grey">Sweatshirts | Reebok</p>
           <p>DKK ${product.price},-</p>
           <div class="knap">
             <a href="produkt.html">Læs mere</a>
           </div>
         </article>
      `
    )
    .join("");

  if (listContainer) {
    listContainer.innerHTML = markup;
  }
}