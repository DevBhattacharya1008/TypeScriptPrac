type Combinable = number | string;

function combineData(n1: Combinable, n2: Combinable) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    console.log(n1 + n2);
  } else if (typeof n1 === "string" && typeof n2 === "string") {
    console.log(n1.concat(n2));
  }
}

combineData(6, 7);
combineData("dev ", "bhattacharya");
