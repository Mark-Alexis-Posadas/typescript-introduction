const fruits: string[] = ["banana", "apple", "orange"];
const numbers: number[] = [1, 2, 3, 4, 5];

interface Details {
  firstName: string;
  age: number;
  isGf: boolean;
  favoriteAnimals: string[];
}
const personalDetails = [
  {
    firstName: "Alexis",
    age: 30,
    isGf: false,
    favoriteAnimals: ["pigeon", "pig", "cow"],
  },
  {
    firstName: "Aldo",
    age: 33,
    isGf: false,
    favoriteAnimals: ["goat", "pig", "snake"],
  },
  {
    firstName: "Jojo",
    age: 30,
    isGf: true,
    favoriteAnimals: ["roaster", "dog", "cat"],
  },
];

console.log(fruits, numbers, personalDetails[0].favoriteAnimals);
