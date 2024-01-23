// for (let i = 0; i <= 10; i++) {
//     if (i === 7) {
//         console.log('7 is my lucky number');
//     } else {
//         console.log('Number ' + i);
//     }
// }

// Nested loops
// for (let i = 1; i <= 10; i++) {
//   console.log('Number ' + i);

//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Loop through an array
// const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

// for (let i = 0; i < names.length; i++) {
//   if (names[i] === 'John') {
//     console.log(names[i] + ' is the best');
//   } else {
//     console.log(names[i]);
//   }
// }

// Break
// for (let i = 0; i <= 20; i++) {
//     if (i === 15) {
//       console.log('Breaking...');
//       break;
//     }
//     console.log(i);
//   }

// Continue
// for (let i = 0; i <= 20; i++) {
//     if (i === 13) {
//       console.log('Skipping 13...');
//       continue;
//     }
//     console.log(i);
//   }

// Filter
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
  });
  
  // Short version
  const evenNumbers2 = numbers.filter((number) => number % 2 === 0);
  
  // Same with forEach
  const evenNumbers3 = [];
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  });
  
  const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
  ];
  
  // Chỉ nhận các công ty bán lẻ
  const retailCompanies = companies.filter(
    (company) => company.category === 'Retail'
  );
  console.log(retailCompanies);
  
  // Tìm các công ty bắt đầu vào hoặc sau năm 1980 và kết thúc vào hoặc trước năm 2005
  const earlyCompanies = companies.filter(
    (company) => company.start >= 1980 && company.end <= 2005
  );
  console.log(earlyCompanies);
  
  // Nhận các công ty tồn tại từ 10 năm trở lên
  const longCompanies = companies.filter(
    (company) => company.end - company.start >= 10
  );
  
  console.log(longCompanies);


