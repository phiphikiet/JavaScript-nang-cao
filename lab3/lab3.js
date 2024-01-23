// Bai 2
const checkDogs = (dogsJulia, dogsKate) => {
    // 1. Xóa tuổi mèo khỏi mảng của Julia
    const juliaCopy = dogsJulia.slice();
    juliaCopy.splice(0, 1);
    juliaCopy.splice(-2);
  
// 2. Tạo mảng mới với dữ liệu của Julia đã sửa và Kate
const allDogs = [...juliaCopy, ...dogsKate];
  
// 3. Kiểm tra và in ra console thông điệp về trạng thái của từng con chó
allDogs.forEach((age, index) => {
    const dogType = age >= 3 ? 'người lớn' : 'chó con';
    console.log(`Chó số ${index + 1} là ${dogType} và ${age} tuổi.`);
});
};
  
// TEST DATA 1
const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
console.log("TEST DATA 1:");
checkDogs(dogsJulia1, dogsKate1);
  
// TEST DATA 2
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
console.log("\nTEST DATA 2:");
checkDogs(dogsJulia2, dogsKate2);

// Bai3
const calcAverageHumanAge = (ages) => {
// 1. Tính tuổi của chó theo tuổi của con người
const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  
// 2. Loại trừ chó có tuổi dưới 18 tuổi của người
const adultsOnly = humanAges.filter(age => age >= 18);
  
// 3. Tính tuổi trung bình của chó trưởng thành
const averageAdultAge = adultsOnly.reduce((sum, age) => sum + age, 0) / adultsOnly.length;
  
return averageAdultAge;
};
  
// TEST DATA 1
const testData1 = [5, 2, 4, 1, 15, 8, 3];
const averageHumanAge1 = calcAverageHumanAge(testData1);
console.log(`Tuổi trung bình của chó trưởng thành theo tuổi người (TEST DATA 1): ${averageHumanAge1} tuổi.`);
  
// TEST DATA 2
const testData2 = [16, 6, 10, 5, 6, 1, 4];
const averageHumanAge2 = calcAverageHumanAge(testData2);
console.log(`Tuổi trung bình của chó trưởng thành theo tuổi người (TEST DATA 2): ${averageHumanAge2} tuổi.`);

// Bai 4
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];
// 1. Thêm thuộc tính mới vào mỗi object là khẩu phần ăn hợp lý
dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
  
// 2. Tìm và in ra chó của Sarah ăn quá nhiều hay quá ít
const sarahDog = dogs.find(dog => dog.owner === 'Sarah');
const sarahFoodStatus = sarahDog.recommendedFood > sarahDog.weight ? 'ăn quá ít' : 'ăn quá nhiều';
console.log(`Chó của Sarah ${sarahFoodStatus}.`);
  
// 3. Tạo mảng chủ của những chú chó ăn quá nhiều và ăn quá ít
const ownersEatTooMuch = dogs.filter(dog => dog.weight > dog.recommendedFood).map(dog => dog.owner);
const ownersEatTooLittle = dogs.filter(dog => dog.weight < dog.recommendedFood).map(dog => dog.owner);
  
// 4. In ra chuỗi tương ứng
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs ăn quá nhiều!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs ăn quá ít!`);

// 5. Kiểm tra xem có chó nào có khẩu phần ăn chính xác không
const isExactFood = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(`Có chó nào có khẩu phần ăn chính xác không? ${isExactFood}`);

// 6. Kiểm tra xem có chó nào có khẩu phần ăn ở mức hợp lý không
const isReasonableFood = dogs.some(dog => dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10);
console.log(`Có chó nào có khẩu phần ăn ở mức hợp lý không? ${isReasonableFood}`);

// 7. In ra tất cả các chó có khẩu phần ăn hợp lý
const dogsWithReasonableFood = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10);
console.log("Chó có khẩu phần ăn hợp lý:", dogsWithReasonableFood);

// 8. Tạo mảng mới và sắp xếp theo khẩu phần ăn đề nghị
const sortedDogs = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log("Chó được sắp xếp theo khẩu phần ăn đề nghị:", sortedDogs);