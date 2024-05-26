function calculateSum(paramOne: number, paramTwo: number): number {
  let result = paramOne * paramTwo;
  return result;
}
const numeOne: number = 3;
const numTwo: number = 2;

console.log(calculateSum(numeOne, numTwo));

function simpleTypes(firstName: string, lastName: string, age: number): string {
  return `${firstName} ${lastName} age - ${age}`;
}

const firstName: string = "Mark Alexis";
const lastName: string = "Posadas";
const age: number = 30;

console.log(simpleTypes(firstName, lastName, age));
