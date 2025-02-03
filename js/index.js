console.log

fetch(`https://kea-alt-del.dk/t7/api/categories`).then((response) => response.json()).then(showCategori);

function showCategori(data) {
    console.log("min data er: ", data);

    markup = data.map((element) =>`
    <a href="produktside.html" class="box">${element.category}</a>
    `)
    .join("");

    document.querySelector("a").innerHTML = markup;

}