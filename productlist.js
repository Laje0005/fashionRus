fetch("https://kea-alt-del.dk/t7/api/products")
.then((res) => res.json())
.then(showProducts);

function showProducts(products){

//looper og kalder showProduct
products.forEach(showProduct)
}

function showProduct(product) {
  console.log(product);

  //Fang template
  const template = document.querySelector("#smallProductTemplate").content;

  //Lav en kopi
  const copy = template.cloneNode(true);

  // Ændr indholdet i kopien
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".subtle").textContent = `${product.category} - ${product.brandname}`;
  copy.querySelector(".price span").textContent = `Prev. DKK ${product.price},-`;
  copy.querySelector(".discounted p").textContent = `Now DKK ${product.discountedprice},-`;
  copy.querySelector(".discounted p + p").textContent = `-${product.discountpercentage}%`;
copy.querySelector("img").src = product.image;


  // Hvis produktet er udsolgt
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  //Appende
  document.querySelector("main").appendChild(copy);
}


/* <article class="smallProduct">
<img src="billeder/1533.webp" alt="red shirt">
<h3>Fan wear</h3>
<p class="subtle"> T-shirts - Nike</p>
<p class="price"><span>Prev.</span>DKK 1595,-</p>
<div class="discounted">
<p>Now DKK 1560,-</p>
<p>-34%</p>
</div>

<a href="produkt.html">Read more.</a>

</article> */

/* {
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "price": 895,
  "discount": null,
  "brandname": "Nike",
  "soldout": 0
} */