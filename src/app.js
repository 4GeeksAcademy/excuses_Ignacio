import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
let action = ['ate ', 'peed ', 'crushed ', 'broke ', 'shitted '];
let what = ['my homework ', 'my phone ', 'the car ', 'my car '];
let when = ['before the class ', 'when I was sleeping ', 'while I was exercising ', 'during my lunch ', 'while I was praying '];
let randomWhoNumber = (Math.floor(Math.random() * 4) + 1) - 1;
let randomActionNumber = (Math.floor(Math.random() * 5) + 1) - 1;
let randomWhatNumber = (Math.floor(Math.random() * 4) + 1) - 1;
let randomWhenNumber = (Math.floor(Math.random() * 4) + 1) - 1;

window.onload = function() {
  document.getElementById("excuse").innerHTML = who[randomWhoNumber] + action[randomActionNumber] + what[randomWhatNumber] + when[randomWhenNumber];
  console.log("Hello Rigo from the console!");
};
