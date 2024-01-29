const API_URL = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("init add");

    handleAddProduct();

}

function handleAddProduct() {
    const btnAdd = document.getElementById('btnAdd');

    btnAdd.onclick = async function (e) {
        e.preventDefault();
        // get element khi nhan nut them moi
        let productName = document.getElementById('productName').value;
        let productPrice = document.getElementById('productPrice').value;
        let productCategory = document.getElementById('productCategory').value;
        let productImage = document.getElementById('productImage').value;
        let productDescription = document.getElementById('productDescription').value;

        // console.log(productName.value);
        let data = {
            title: productName,
            price: productPrice,
            category: productCategory,
            image: productImage,
            description: productDescription,
        }
        await createProduct(data);

        window.location.href = '/js-buoi1/client/admin/list.html'
    }
}

function createProduct(data) {
    let options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }

    fetch(`${API_URL}/product`, options);
}