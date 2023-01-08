function squire(num: number) {
  return num * num;
}

function greet(person: string) {
  return `Hi there ${person}`;
}

squire(3);
greet("Mr. XYZ");

const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  return color.toUpperCase();
});
