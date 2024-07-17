/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function aleatorio(lista) {
    let numAleatorio = Math.floor(Math.random() * lista.length);
    return lista[numAleatorio];
  }
  let excusa =
    aleatorio(who) +
    " " +
    aleatorio(action) +
    " " +
    aleatorio(what) +
    " " +
    aleatorio(when);

  let elementExcuse = window.document.querySelector("#excuse");

  elementExcuse.innerHTML = excusa;

  let excuseButton = document.querySelector("#generate-excuse");

  excuseButton.addEventListener("click", () => {
    let nuevaExcusa =
      aleatorio(who) +
      " " +
      aleatorio(action) +
      " " +
      aleatorio(what) +
      " " +
      aleatorio(when);
    elementExcuse.innerHTML = nuevaExcusa;
  });
};
