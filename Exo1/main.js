const candidates = [
  "Le Filip",
  "Ruby On The Nail",
  "Leona Winter",
  "Lula Strega",
  "Misty Phoenix",
  "Perseo",
  "Norma Bell",
  "Edeha Noire",
  "Magnetica",
  "Afrodite Amour",
];

// 1 :
console.log(candidates[0]);

// 2 :
console.log(candidates[7]);

// 3 :
for (const i in candidates) {
  console.log(candidates[i]);
}

// 4 :
const container = document.querySelector("container");

for (const i in candidates) {
  const ul = document.createElement("ul");

  ul.textContent = candidates[i];

  document.body.appendChild(ul);
}
