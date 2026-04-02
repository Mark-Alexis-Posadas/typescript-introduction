type ProjectsTypes = {
  id: number;
  name: string;
  status: string;
};
const prices: number[] = [120, 300, 250];
const prutas: string[] = ["apple", "orange", "banana"];
const mixedArray: (number | string | boolean)[] = [1, "alexis", false];
const projects: ProjectsTypes[] = [
  {
    id: 1,
    name: "Website Redesign",
    status: "in progress",
  },
  {
    id: 2,
    name: "Mobile App",
    status: "completed",
  },
  {
    id: 3,
    name: "API Development",
    status: "pending",
  },
];

let numero = [1, 2, 3, 4];
for (let i = 0; i < prutas.length; i++) {
  console.log(prutas[i]);
}

const doubleNumbers = numero.map((number) => number * 2);
console.log(prices, mixedArray, projects, doubleNumbers);

function addNumbers(a: number, b: number) {
  return a + b;
}

console.log(addNumbers(1, 1));
