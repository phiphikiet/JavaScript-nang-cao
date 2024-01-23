window.addEventListener("DOMContentLoaded", init);

function init() {
    // console.log('init');
    renderProductList()
}

async function renderProductList() {
    const API_URL = 'http://localhost:3000/product'
    // B1: Lay Data
    const res = await fetch(API_URL);
    
    // axios
    const productList = await res.json(); 

    // B2: Lay DOM Element
    const productListElm = document.getElementById('product-list');
    // console.log(productListElm);

    // B3: Creat Element
    const div = document.createElement("div");
    div.classList.add("row");

    // B4: Inner HTML
    div.innerHTML = `${productList.map((product) => {
        return `<div class="col-12 col-md-3">
        <div class="card" style="width: 18rem">
          <img
            src=${product.image}
            class="img-fluid img-thumbnail"
            alt=""
            style="height: 300px; object-fit: contain"
          />
          <div class="card-body">
            <h5 class="card-title" style="font-size: 1.1rem">${product.title}</h5>
            <p class="card-text">${product.description.substring(0,60)}...</p>
            <a href="#" class="btn btn-primary">Add To Cart</a>
          </div>
        </div>
      </div>`
    })}`;

    // B5: Chen vao DOM
    productListElm.appendChild(div);
}