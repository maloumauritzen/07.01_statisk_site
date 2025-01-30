let productContainer = document.querySelector(".productContainer")
fetch("https://kea-alt-del.dk/t7/api/products/1603")
.then(response => response.json())
.then(data => { productContainer.innerHTML = `
    <h2 class="link_sti">
        <a href="index.html">Home</a> > <a href="index.html">Categories</a> >
        <a href="produktside.html">Produkter</a>
        > Navy Reebok Hoops Round Neck Sweatshirt
      </h2>

      <section class="produkt_grid">
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/1603.webp"
          alt="model med sweatshirt"
          class="produkt_img"
        />
        <article class="produkt_tekstboks">
          <h3>Produkt Information</h3>
          <p>DKK ${data.price},-</p>
          <h4>Model navn</h4>
          <p>${data.productdisplayname}</p>
          <h4>Color</h4>
          <p>${data.basecolour}</p>
          <h4>Inventory number</h4>
          <p>${data.id}</p>
        </article>

        <article class="blue_tekstboks">
          <h3>${data.productdisplayname}</h3>
          <p class="grey">Sweatshirts | Reebok</p>
          <div class="choose_size">
            <button class="size_button">Vælg størrelse ▽</button>
            <ul class="size_dropdown">
              <li>Onesize</li>
            </ul>
          </div>
          <div class="knap">
            <a href="#">Tilføj til kurv</a>
          </div>
        </article>
      </section>`

})