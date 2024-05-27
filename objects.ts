const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

// car.type = 20; //Type 'number' is not assignable to type 'string'.ts(2322)
car.type = "Honda"; // no error because the type is string

console.log(car.type);
console.log(car.model);
console.log(car.year);
console.log(car);

//Example without an optional property

// const secondCar: { type: string; mileage: number } = {
//   //Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.ts(2741)

//   type: "toyota",
// };

// secondCar.mileage = 2000;
// console.log(secondCar);

//Example with an optional property

const thirdCar: { type: string; mileage?: number } = {
  type: "hyundai",
};

thirdCar.mileage = 2000;
console.log(thirdCar);
