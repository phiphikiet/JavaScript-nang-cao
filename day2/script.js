function sayHello(name = "kyto") { 
    // value defaul
    // Không tham số, không return
    console.log('Toi la:'+ name);
    console.log(`Toi la:${name}`); // nối chuỗi js
    // return
    return `Toi la:${name}`;
}
// const myLog = sayHello();
// console.log(myLog);

const addNumber = (a, b) => a + b;
   

// const addNumber = (a, b) => {
//     return a + b;
// } // bằng function
// function addNumber(){}
const myLog = addNumber(9, 9);
console.log(myLog);