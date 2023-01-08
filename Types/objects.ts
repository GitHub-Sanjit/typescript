// const dog = {
//   name: "Elton",
//   breed: "Australian Shepherd",
//   age: 0.5,
// };

// function printName(person: { first: string; last: string }): void {
//   console.log(`${person.first} ${person.last}`);
// }

// printName({ first: "sanjit", last: "sarkar" });

// let coordinate: { x: number; y: number } = { x: 2, y: 5 };

// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

type Point = {
  x: number;
  y: number;
};

let coordinate: Point = { x: 34, y: 3 };

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 3, y: point.y * 2 };
}
