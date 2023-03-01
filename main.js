
//First problem(Write a function that prints “Hello, World!” three times )
let count = 0;
while (count < 3) {
  count++; 
  console.log('Hello, World!');
};


//Second problem(Write a function that returns the day of the week by its numbers.)
function getDayOfWeek(dayNum) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    date.setDate(date.getDate() + dayNum);
    return daysOfWeek[date.getDay()];
  }
  console.log(getDayOfWeek(0)); // "Sunday"
  console.log(getDayOfWeek(1)); // "Monday"
  console.log(getDayOfWeek(2)); // "Tuesday"
  console.log(getDayOfWeek(3)); // "Wednesday"
  console.log(getDayOfWeek(4)); // "Thursday"
  console.log(getDayOfWeek(5)); // "Friday"
  console.log(getDayOfWeek(6)); // "Saturday"

  //Third problem(Write a function to convert dollars to tenge.)
  
  function dollarsTotenge(dollars) {
    const exchangeRate = 448.84;
    const tenge = dollars * exchangeRate;
    return tenge;
  }
  console.log(dollarsTotenge(100)); 44884
  console.log(dollarsTotenge(50)); 22442
  console.log(dollarsTotenge(10)); 4488.4