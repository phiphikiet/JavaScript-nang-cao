const API_URL = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("init edit");

    const urlParams = new URLSearchParams(window.location.search);

    const id = urlParams.get('id');

    // console.log(id);
    if (id) {
        getProductById(id);

        handleEditProduct(id);
    }
}

async function getProductById(id) {
    const response = await fetch(`${API_URL}/product/${id}`);

    const product = await response.json();

    // console.log(product);

    handleLoadProduct(product);
}

function handleLoadProduct(product) {
    let productName = document.getElementById('productName');
    let productPrice = document.getElementById('productPrice');
    let productCategory = document.getElementById('productCategory');
    let productImage = document.getElementById('productImage');
    let productDescription = document.getElementById('productDescription');

    productName.value = product.title;
    productPrice.value = product.price;
    productCategory.value = product.category;
    productImage.value = product.image;
    productDescription.value = product.description;
}

function handleEditProduct(id) {
    const btnEdit = document.getElementById('btnEdit');

    btnEdit.onclick = async function (e) {
        e.preventDefault();
        // get element khi nhan nut them moi
        let productName = document.getElementById('productName').value;
        let productPrice = document.getElementById('productPrice').value;
        let productCategory = document.getElementById('productCategory').value;
        let productImage = document.getElementById('productImage').value;
        let productDescription = document.getElementById('productDescription').value;

        // console.log(productName.value);
        let data = {
            id: id,
            title: productName,
            price: productPrice,
            category: productCategory,
            image: productImage,
            description: productDescription,
        }
        await editProduct(data);

        window.location.href = '/js-buoi1/client/admin/list.html'
    }
}

function editProduct(data) {
    let options = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }

    fetch(`${API_URL}/product/${data.id}`, options);
}