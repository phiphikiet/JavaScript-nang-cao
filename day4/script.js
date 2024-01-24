// const title = document.getElementById('title');
const form = document.getElementById('form');

// title.addEventListener('input', onchange);

// function onchange(event){
//     console.log("value", event.target.value);
// }

// Khi nhan het du lieu tu input, select => button submit
// form lang nghe su kien submit

form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();// chan day input value len url

    console.log("title", title.value);
    //validate
    if(!title.value){
        alert("vui long nhap");
        return;
    }
}