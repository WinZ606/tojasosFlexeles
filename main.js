import { tojasok } from "./adat.js";

let txt = "";

for (let index = 0; index < tojasok.length; index++) {
  if (index == 3) {
    txt += `<div class = "tojas3">
    <h2>${tojasok[index].nev}</h2>
    <p>${tojasok[index].szin}</p>
    <p>${tojasok[index].meret}</p>
    <img src=${tojasok[index].eleresiUt}>`;
  } else {
    txt += `<div class = "tojas">
      <h2>${tojasok[index].nev}</h2>
      <p>${tojasok[index].szin}</p>
      <p>${tojasok[index].meret}</p>
      <img src=${tojasok[index].eleresiUt}>
      </div>`;
  }
}

article.innerHTML = `${txt}`;
