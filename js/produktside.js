console.log("script hentet");

const category = "Apparel";
const listContainer = document.querySelector(".productList");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
  .then((response) => response.json())
  .then(showProductList);

function showProductList(data) {
  const markup = data
    .map(
      (product) =>
        `
         <article class="card ${product.discount && "sale"} ${product.soldout && "soldout"}">
           <img
             src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
             alt="${product.productdisplayname}"
           />
           <h3>${product.productdisplayname}</h3>
           <p class="grey">${product.articletype} | ${product.brandname}</p>
           <p>DKK ${product.price},-</p>
           <div class="knap">
             <a href="produkt.html">Læs mere</a>
           </div>
         </article>
                 <article class="card ${product.discount && "sale"} ${product.soldout && "soldout"}">
          <div class="sale">${product.discount}</div>
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
            alt="${product.productdisplayname}"
          />
          <h3>{product.productdisplayname}</h3>
          <p class="grey">${product.articletype} | ${product.brandname}</p>
          <p>Før DKK ${product.price},-</p>
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