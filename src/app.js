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

  function generadorExcusas() {
    let randomWhoIndex = Math.floor(Math.random() * who.length);
    let randomActionIndex = Math.floor(Math.random() * action.length);
    let randomWhatIndex = Math.floor(Math.random() * what.length);
    let randomWhenIndex = Math.floor(Math.random() * when.length);

    let randomWho = who[randomWhoIndex];
    let randomAction = action[randomActionIndex];
    let randomWhat = what[randomWhatIndex];
    let randomWhen = when[randomWhenIndex];

    return randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
  }
  function mostrarExcusa() {
    let excuse = generadorExcusas();
    document.getElementById("excuse").innerText = excuse;
  }

  window.onload = mostrarExcusa;
  console.log("Hello Rigo from the console!");
};
